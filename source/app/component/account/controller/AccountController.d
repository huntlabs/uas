module app.component.account.controller.AccountController;

import hunt.framework;
import app.component.account.model.App;
import app.component.account.model.AppToken;
import app.component.account.repository.AppRepository;
import app.component.account.repository.AppTokenRepository;
import app.component.account.middleware.AccountMiddleware;

import std.json;
import std.digest.md;

class AccountController : Controller
{
    mixin MakeController;
	this()
	{
		addMiddleware(new AccountMiddleware(["account.account.refresh_token"]));
	}
    @Action 
    JSONValue get_token()
    {
        int appid = request.get("appid").to!int;
        string secret = request.get("secret");
        string sign = request.get("sign");
        string request_time = request.get("request_time");
        auto appRepository = new AppRepository;
        auto appTokenRepository = new AppTokenRepository;
        auto app = appRepository.findById(appid);
        JSONValue ret;
        JSONValue data;
        if(app.secret == secret){
            auto md5 = new MD5Digest();
            ubyte[] hashKey = md5.digest(appid.to!string~md5.digest(request_time~secret).toHexString);
            if(sign == toHexString!(LetterCase.lower)(hashKey)){
                auto token = new AppToken;
                token.appid = appid;
                token.created = time();
                token.expires = token.created+7200;
                token.token = md5.digest(appid.to!string~secret~token.created.to!string).toHexString!(LetterCase.lower);
                token.refresh_token = md5.digest("refresh_token"~appid.to!string~secret~token.created.to!string).toHexString!(LetterCase.lower);
                appTokenRepository.save(token);

                ret["message"] = "success";
                data["token"] = token.token;
                data["refresh_token"] = token.refresh_token;
                data["expires"] = token.expires;
                ret["data"] = data;
            }else{
                ret["message"] = "认证失败!";
            }
        }else{
            ret["message"] = "认证失败!";
        }

        return ret;
    }

    @Action 
    JSONValue refresh_token()
    {
        string refresh_token = request.get("refresh_token");
        int appid = request.get("appid").to!int;
        auto appTokenRepository = new AppTokenRepository;        
        auto appRepository = new AppRepository;
        auto app = appRepository.findById(appid);
        JSONValue ret;
        JSONValue data;
            auto token = appTokenRepository.findByAppId(appid);
            if(token.refresh_token == refresh_token){
                token.updated = time();
                auto md5 = new MD5Digest();
                token.token = md5.digest(appid.to!string~app.secret~token.updated.to!string).toHexString!(LetterCase.lower);
                token.expires = token.updated+7200;
                token.refresh_token = md5.digest("refresh_token"~appid.to!string~app.secret~token.updated.to!string).toHexString!(LetterCase.lower);
                appTokenRepository.save(token);
                ret["message"] = "success";
                data["token"] = token.token;
                data["refresh_token"] = token.refresh_token;
                data["expires"] = token.expires;
                ret["data"] = data;
            }else{
                ret["message"] = "refresh_token无效!";
            }
        return ret;
    }
}