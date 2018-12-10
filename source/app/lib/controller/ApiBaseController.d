module app.lib.controller.ApiBaseController;

import hunt.framework;
import std.json;

class ApiBaseController : Controller
{
    this()
    {
        //_app = _codeConf.build!(AppConfig, "code")();
        //addConfig("code", _codeConf);
    }

    override bool before()
    {
        return true;
    }

    override bool after()
    {
        return true;
    }

    static JSONValue resultMessage(T = string)(T data = T.init)
    {
        JSONValue j;
        j["code"] = 0;
        j["message"] = null;
        if(data){
            j["data"] = toJSON!(T)(data);
        }else{
            j["data"] = null;
        }
        return j;
    }

    static JSONValue errorMessage(T = string)(int code, string msg, T data = T.init)
    {
        JSONValue j;
        string codeStr = code.to!string;
        j["code"] = code;
        j["message"] = msg;
        if(data){
            j["data"] = toJSON!(T)(data);
        }else{
            j["data"] = null;
        }
        return j;
    }


}
