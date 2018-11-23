module app.component.user.controller.UserController;
import hunt.framework;
import app.component.user.repository.UserRepository;
import app.component.user.model.User;
import app.component.user.helper.Password;
import app.component.account.middleware.AccountMiddleware;
import hunt.framework.http.Request;
import hunt.framework.http.Response;
import hunt.logging;
import hunt.http.codec.http.model.HttpMethod;
import hunt.http.codec.http.model.Cookie;
import std.digest.md;

class UserController : Controller
{
	mixin MakeController;
	this()
	{
		addMiddleware(new AccountMiddleware(["user.user.validate", "user.user.serviceValidate"]));
	}

    @Action
    string profile()
    {
        auto user = checkuser();
        view.assign("user",user); 
        view.assign("title", user.username ~ "的个人主页");
        //view.assign("elapsed", request.elapsed);
        view.assign("cc", request.cookie("CAS"));
        // logInfo((new CookieManager).get("CAS"));
        return view.render("user/userCenter");
    }

	@Action
	Response login()
	{
        // MonoTime before = MonoTime.currTime;
        response.setHeader("content-type","text/html;charset=utf-8");

        if(toUpper(request.method()) == HttpMethod.POST.asString())
        {
            string email = request.post("email","");
            string password = request.post("password","");
            string service = request.post("service","");
            string callback = request.post("callback","");

            auto repository = new UserRepository;
            auto find = repository.findByEmail(email)?repository.findByEmail(email):null;
            logInfo(name);
            if(find)
            { 
                logInfo(generateUserPassword(password, find.salt));
                if(find.password == generateUserPassword(password, find.salt)){
                    auto md5 = new MD5Digest();
                    ubyte[] hashKey = md5.digest(cast(string) serialize!User(find));
                    auto cookie = new Cookie("DFTGC", toHexString(hashKey),0 ,"/" ,"192.168.32.129",false ,false);
                    string st = md5.digest(time().to!string).toHexString;
                    HttpSession session = request.session(true);
                    session.set(toHexString(hashKey), cast(string) serialize!User(find));
                    session.set(st, service);
                    request.flush();
                    return new RedirectResponse(this.request,callback~"?st="~st).withCookie(cookie);
                }else{
                    return new RedirectResponse(this.request,"/login");
                }
            }else{
                view.assign("service", service);
                view.assign("callback", callback);
                return response.setContent(view.render("user/register"));
            }
        }
 
        view.assign("title","登录 - 授权中心");
        // MonoTime after4 = MonoTime.currTime;
        // Duration timeElapsed4 = after4 - before;
        // logInfo(timeElapsed4);
        // view.assign("elapsed", request.elapsed);
        string service = request.get("service","");
        string callback = request.get("callback","");
        view.assign("service", service);
        view.assign("callback", callback);
        return response.setContent(view.render("user/login"));
	}

    @Action 
    Response register()
    {
        response.setHeader("content-type","text/html;charset=utf-8");
        if(toUpper(request.method()) == HttpMethod.POST.asString())
        {
            User user;
            string name = request.post("username","");
            string password = request.post("password","");
            string repassword = request.post("repassword","");
            string email = request.post("email","");
            string service = request.get("service","");
            string callback = request.get("callback","");
            if(password != repassword)
            {
                view.assign("title","加入 - 我们");
                // view.assign("elapsed", request.elapsed);
                view.assign("error_messages", ["两次输入密码不一致"]);
                view.assign("service", service);
                view.assign("callback", callback);
                return response.setContent(view.render("user/register"));
            }
            auto repository = new UserRepository;

            user = repository.findByName(name) ? repository.findByName(name) : ( repository.findByEmail(email) ? repository.findByEmail(email) : null );

            if(user)
            {
                view.assign("title","加入 - 我们");
                // view.assign("elapsed", request.elapsed);
                view.assign("error_messages", ["用户名或邮箱已注册"]);
                view.assign("service", service);
                view.assign("callback", callback);
                return response.setContent(view.render("user/register"));
            }else
            {
                user = new User();
                user.username = name;
                user.salt = generateSalt();
                user.password = generateUserPassword(password, user.salt);
                user.email = email;
                user.created = time();
                repository.save(user);
                auto md5 = new MD5Digest();
                ubyte[] hashKey = md5.digest(cast(string) serialize!User(user));
                auto cookie = new Cookie("DFTGC", toHexString(hashKey),0 ,"/" ,"192.168.32.129",false ,false);
                string st = md5.digest(time().to!string).toHexString;
                HttpSession session = request.session(true);
                session.set(toHexString(hashKey), cast(string) serialize!User(user));
                session.set(st, service);
                request.flush();
                return new RedirectResponse(this.request,callback~"?st="~st).withCookie(cookie);
                // view.assign("elapsed", request.elapsed);
                // view.assign("success_messages", ["注册成功"]);
                // return new RedirectResponse(this.request,"/login");
            }
        }

        view.assign("title","加入 - 我们");
        // view.assign("elapsed", request.elapsed);

        return response.setContent(view.render("user/register"));
    }

    @Action 
    Response logout()
    {
        string tgc = request.cookie("DFTGC");
        string callback = request.get("callback");
        if(request.session.has(tgc))
        {
            request.session.remove(tgc);
            //去除cookie
        }
        
        return new RedirectResponse(this.request,callback);
    }

    @Action 
    User checkuser()
    {
    	auto str = request.session.get("USER");
        // auto str = (new CookieManager).get("USER");
        if (str == null)
	    return null;
	    return unserialize!User(cast(byte[]) str);
    }

    @Action
    JSONValue serviceValidate()
    {
        string service = request.get("service");
        string st = request.get("st");
        string tgc = request.cookie("DFTGC");
        HttpSession session = request.session();
        JSONValue ret;
        if(session.get(st) == service){
            ret["message"] = "valid";
            ret["data"] = session.get(tgc);
            return ret;
        }else{
            ret["message"] = "invalid";
            return ret;
        }
    }

    @Action
    Response validate()
    {
        HttpSession session = request.session();
        string service = request.get("service");
        string tgc = request.cookie("DFTGC");
        string callback = request.get("callback");
        if(tgc){
            auto md5 = new MD5Digest();
            string st = (md5.digest(time().to!string).toHexString);
            session.set(st, service);
            request.flush();
            return new RedirectResponse(this.request, callback~"?st="~st);
        }else{
            response.setHeader("content-type","text/html;charset=utf-8");
            view.assign("service", service);
            view.assign("callback", callback);
            return response.setContent(view.render("user/login"));
        }
    }
}
