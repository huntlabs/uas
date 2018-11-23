module app.component.test.controller.TestController;
import std.json;
import std.net.curl;
import hunt.framework;
import hunt.http.codec.http.model.Cookie;
import hunt.logging;
import std.digest.md;

class TestController : Controller
{
	mixin MakeController;

    @Action
    string index()
    {
        response.setHeader("content-type","text/html;charset=utf-8");
        if(request.cookie("test")){
            view.assign("valid", true);
        }
        view.assign("valid", false);
        return view.render("test/index");
    }

    string get_token()
    {
        string request_time = time().to!string;
        int appid = 1000;
        string secret = "abccefdasdf";
        auto md5 = new MD5Digest();
        ubyte[] hashKey = md5.digest(appid.to!string~md5.digest(request_time~secret).toHexString);
        string sign = toHexString!(LetterCase.lower)(hashKey);
        JSONValue res = get("http://passport.dlangchina.com/get_token?appid=1000&secret=abccefdasdf&request_time="~request_time~"&sign="~sign).parseJSON;
        logInfo(res);
        if(res["message"].to!string == "success"){
            return res["data"]["token"].to!string;
        }else{
            return "获取token失败";
        }
    }

    @Action
    Response validate()
    {
        // string token = 
        string service = "test";
        string callback = "192.168.32.129/postvalidate";
        return new RedirectResponse(this.request, "http://passport.dlangchina.com/validate?service="~service~"&callback="~callback);
    }

    @Action
    Response postValidate()
    {
        response.setHeader("content-type","text/html;charset=utf-8");
        string st = request.get("st");
        if(st){
            JSONValue ret = get("http://passport.dlangchina.com/servicevalidate?st="~st).parseJSON;
            logInfo(ret);

            if(ret["message"].to!string == "valid"){
                auto userinfo = ret["data"];
                HttpSession session = request.session();
                session.set("test", userinfo);
                auto cookie = new Cookie("test", "testvalidate",0 ,"/" ,"192.168.32.129",false ,false);
                return new RedirectResponse(this.request, "/test").withCookie(cookie);
            }else{
                view.assign("valid", false);
                return new RedirectResponse(this.request, "/test");
            }
        }
        view.assign("valid", false);
        return new RedirectResponse(this.request, "/test");
    }
}