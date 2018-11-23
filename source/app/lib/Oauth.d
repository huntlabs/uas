module app.lib.Oauth;

import std.net.curl;
import hunt.util.configuration;
import std.digest.md;
import hunt.datetime;
import hunt.logging;
import std.json;
import std.array:split;
import std.conv;
import std.stdio;
import hunt.framework.application.AppConfig;

class Oauth {
    private string _channel;
    private string state;
    private string access_token;
    private string appid;
    private string secret;
    private string access_token_url;
    private string user_info_url;
    private string[string] options;

    this(string channel)
    {
        _channel = channel;
        auto md5 = new MD5Digest();
        ubyte[] xo = md5.digest(time().to!string); 
        state = xo.to!string;
        ConfigBuilder con = Config.config("hunt");
        if(_channel == "github"){
            appid = con.github.appid.value;
            secret = con.github.secret.value;
            access_token_url = con.github.access_token_url.value;
            user_info_url = con.github.user_info_url.value;
        }else if(_channel == "qq"){
            appid = con.qq.appid.value;
            secret = con.qq.secret.value;
            access_token_url = con.qq.access_token_url.value;
            user_info_url = con.qq.user_info_url.value;
        }else if(_channel == "weibo"){
            appid = con.weibo.appid.value;
            secret = con.weibo.secret.value;
            access_token_url = con.weibo.access_token_url.value;
            user_info_url = con.weibo.user_info_url.value;
        }else if(_channel == "wechat"){
            appid = con.wechat.appid.value;
            secret = con.wechat.secret.value;
            access_token_url = con.wechat.access_token_url.value;
            user_info_url = con.wechat.user_info_url.value;
        }

    }

    auto get_user_info(string code)
    {
        if( _channel == "github"){
            logInfo(appid);
            auto content = post(access_token_url, ["client_id" : appid, "client_secret" : secret, "code" : code]);
            access_token = split(split(content, "&")[0], "=")[1].to!string;
            auto info = get(user_info_url~access_token).parseJSON;
            return info;
        }else if( _channel == "qq"){
            // auto content = get(access_token_url~"?grant_type=authorization_code&client_id="~appid~"client_secret="~secret~"code="~code~"redirect_uri=http://192.168.32.129:8080/oauth/qq");
            // logInfo(content);
            access_token = code;
            writeln("###########"~code);
            auto openidret = get("https://graph.qq.com/oauth2.0/me?access_token="~access_token).parseJSON;
            writeln(openidret.to!string);
            auto openid = to!string(openidret["openid"])[1..$-1];
            auto info = get("https://graph.qq.com/user/get_user_info?access_token="~access_token~"&oauth_consumer_key="~appid~"&openid="~openid).parseJSON;
            return info;
        }else if( _channel == "weibo"){
            auto content = post(access_token_url, ["client_id" : appid, "client_secret" : secret, "grant_type" : "authorization_code", "code" : code, "redirect_uri" : ""]).parseJSON;
            access_token = to!string(content["access_token"])[1..$-1];
            auto info = get(user_info_url~"?access_token="~access_token).parseJSON;
            return info;

        }else if( _channel == "wechat"){
            auto content = get(access_token_url~"?grant_type=authorization_code&appid="~appid~"secret="~secret~"code="~code).parseJSON;
            access_token = to!string(content["access_token"])[1..$-1];
            auto openid = to!string(content["openid"])[1..$-1];
            auto info = get(user_info_url~access_token~"&openid="~openid).parseJSON;
            return info;
        }
        return JSONValue.init;
    }
}
