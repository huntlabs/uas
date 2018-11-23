module app.component.account.middleware.AccountMiddleware;

import hunt.framework;
import hunt.framework.application.Middleware;
import hunt.framework.http.Request;
import hunt.framework.http.Response;
import app.component.account.model.AppToken;
import app.component.account.repository.AppTokenRepository;
import std.json;

class AccountMiddleware : Middleware
{
    private string[] _blacklist;

    this(string[] args ...)
    {
        _blacklist ~= args;
    }

    override string name() {
        return AccountMiddleware.stringof;
    }

    override Response onProcess(Request req, Response res) {
        res.setHeader("content-type","application/json;charset=utf-8");
        import std.algorithm.searching; 
        auto r = find!("a == b")(_blacklist, req.route().getRoute);
        auto forced = ( r.length > 0);
        if(forced){
            string appid = request.input("appid", "");
            string token = request.input("token", "");
            if(!appid||!token){
                JSONValue j;
                j["message"] = "参数错误!";
                res.setContent(j.toString);
                return res;
            }
            auto appTokenRepository = new AppTokenRepository;
            auto appToken = appTokenRepository.findByAppId(appid.to!int);
            if(appToken&&appToken.token == token){
                if(appToken.expires>=time()){
                    return null;
                }else{
                    JSONValue j;
                    j["message"] = "token过期!";
                    res.setContent(j.toString);
                    return res;
                }
            }else{
                JSONValue j;
                j["message"] = "认证失败!";
                res.setContent(j.toString);
                return res;
            }
        }else{
            return null;
        }
    }
}