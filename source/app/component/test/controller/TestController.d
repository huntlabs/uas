module app.component.test.controller.TestController;
import std.json;
import std.net.curl;
import hunt.framework;
import hunt.http.codec.http.model.Cookie;
import hunt.logging;

class TestController : Controller
{
	mixin MakeController;

    @Action
    string index()
    {
        if(request.cookie("test")){
            view.assign("valid", true);
        }
        view.assign("valid", false);
        return view.render("test/index");
    }

    @Action
    Response validate()
    {
        string service = "test";
        string callback = "192.168.32.129/postvalidate";
        return new RedirectResponse(this.request, "http://passport.dlangforum.com/validate?service="~service~"&callback="~callback);
    }

    @Action
    Response postValidate()
    {
        string st = request.get("st");
        if(st){
            JSONValue ret = get("http://passport.dlangforum.com/servicevalidate?st="~st).parseJSON;
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