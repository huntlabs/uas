module app.helper.user;

import std.conv;
import std.json;
import std.stdio;
import std.array;
import std.random;
import std.uri;
import std.string;
import std.digest.md;
import std.experimental.logger;

import hunt;

import app.base;
import app.common;
import app.config;
import app.helper;
import app.helper.helper;
import app.model;
import app.exception;

class UserHelper : Helper
{
	public{
		static Helper _helper;
		static BasicModel _model;
	}

	static @property getInstance(){
		if(_helper is null)
		{
			_helper = new UserHelper();
		}
		return _helper;
	}

	static @property model(){
		if(_model is null)
		{
			_model = UserModel.getInstance;
		}
		return _model;
	}

	public static string[string] userCheck(string username,string password)
	{
		auto info = model.where("username","=",username).get();
		if(info.length && info["salt"].length && info["password"] == userEncry(password ~ info["salt"]))
		{
			model.where("username","=",username).update(["updated_at":TimeHelper.getCurrUnixStramp]);
			return info;
		}
		else
		{
			throwExceptionBuild!"PasswdError"();
			return null;
		}
	}

	public static int add(string username,string password)
	{
		auto check = model.where("username","=",username).get();
		if(check)
			throwExceptionBuild!"ExistUser"();

		string salt = getSalt();
		string sPassword = userEncry(password ~ salt);

		string[string] user = [
			"username" : username,
			"password" : sPassword,
			"salt" : salt
		];

		auto result = model.insert(user);

		if(!result)
			throwExceptionBuild!"HandleFailed"();

		return result;
	}


	public static string[string] getData(string id)
	{
		return model.where("id","=",id).get();
	}

	public static string setLogin(BaseController controller,string[string] info,string service)
	{
		auto time = TimeHelper.getCurrUnixStramp();
		string token = userEncry(info["id"] ~ info["username"] ~ time);
		string[string] cache = [
			"username" : info["username"],
			"uid" : info["id"],
			"id" : info["id"],
			"time" : time,
			"token" : token,
		];
		JSONValue jcache = JSONValue(cache);
		mem.set(memPrefix ~ token,jcache);
		controller.setCookie("tgc",token);
		controller.setCookie("uid",info["id"]);
		controller.setCookie("time",time);
		controller.setCookie("username",info["username"]);
		controller.setCookie("ccs",userEncry(info["id"] ~ info["username"] ~ time ~ token));
		
		auto uri = parseURL(decodeComponent(service));
		return service ~ "?st=" ~userEncry(token~uri.host);
	}

	public static JSONValue validate(string service,string tgc,string st)
	{
		auto uri = parseURL(service);
		if(st != userEncry(tgc ~ uri.host))
			throwExceptionBuild!"PasswdError"();
		auto info = mem.get(memPrefix ~ tgc);
		return parseJSON(info);
	}

	public static string getSalt(int length = 12)
	{
		string seed = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
		string result = "";
		while(length)
		{
			result ~= seed[uniform(0,62)];
			length--;
		}
		return result;
	}

	public static string userEncry(string str)
	{
		return CommonHelper.encry(SERVER_SECRET_KEY ~ str);
	}

}
