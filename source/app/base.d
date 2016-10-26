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

	void setCookie(string name,string value,int expires = 604800)
	{
		res.setCookie(name,value,expires,"/",SERVER_HOST);
	}

	void redirect(string target = "/")
	{
		res.redirect(target);
		res.done();
	}

	string questionLink(string questionId)
	{
		return SERVER_HOST~"/question/" ~ questionId;
	}

	string avatarLink(string avatar)
	{
		return "https://dn-phphub.qbox.me/uploads/avatars/4762_1471684361.jpg?imageView2/1/w/100/h/100";
	}

	string topicsLink(string topics)
	{
		return SERVER_HOST ~ "/topics/" ~topics;
	}

	string userLink(string user)
	{
		return SERVER_HOST ~ "/user/" ~ user;
	}
}
