module app.base;

import hunt;

import std.json;
import std.regex;
import std.experimental.logger;

import app.common;
import app.helper;
import app.exception;
import app.config;

class BaseController : Controller
{
	final @property res()
	{
		return response;
	}

	final @property req()
	{
		return request;
	}
	this()
	{
		view.setLayout!"layouts/main.html"();
		view.title = "index";
		view.static_url = SERVER_STATIC;
	}
	void successJson(Response res,ref JSONValue data)
	{
		data["error_code"] = 0;
		res.json(data);
		log("return successJson : ",data);
		res.done();
	}

	void successJson(Response res)
	{
		JSONValue data;
		data["error_code"] = 0;
		this.successJson(res,data);
	}

	void successJson(ref JSONValue data)
	{
		data["error_code"] = 0;
		log("return successJson : ",data);
		res.json(data);
		res.done();
	}
	
	void successJson(string msg)
	{
		JSONValue data;
		data["error_code"] = 0;
		data["msg"] = msg;
		res.json(data);
		res.done();
	}

	void successJson(string[string] info)
	{
		JSONValue data = JSONValue(info);
		data["error_code"] = 0;
		res.json(data);
		res.done();
	}
	void successJson()
	{
		JSONValue data;
		data["error_code"] = 0;
		log("return successJson : ",data);
		import hunt.view;
		res.json(data);
		res.done();
	}

	void errorJson(Response res,int code = 42700,string msg = "")
	{
		JSONValue json = JSONValue(["msg":msg]);
		json["code"] = code;
		json["error_code"] = code;
		json["msg"] = ErrorCodeHelper.getErrorMsg(cast(uint)code);
		log("return errorJson : ",json);
		res.json(json);
		res.done();
	}

	void errorJson(int code = 42700,string msg = "")
	{
		JSONValue json = JSONValue(["msg":msg]);
		json["code"] = code;
		json["error_code"] = code;
		json["msg"] = ErrorCodeHelper.getErrorMsg(cast(uint)code);
		log("return errorJson : ",json);
		res.json(json);
		res.done();
	}

	void checkParamsLength(string[] params...)
	{
		foreach(param;params)
		{
			if(!param.length)
				throwExceptionBuild!"Argument"();
		}
	}

	void checkPasswordSame(string password,string repassword)
	{
		if(password != repassword)
			throwExceptionBuild!"PasswdNotSame"();
	}

	void setCookie(string name,string value,string domain = SERVER_DOMAIN,int expires = 604800)
	{
		res.setCookie(name,value,expires,"/",domain);
	}

	void redirect(string target = "/")
	{
		res.redirect(target);
		res.done();
	}
}
