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
		info = info.length ? info : model.where("email","=",username).get();
		if(info.length && info["salt"].length && info["password"] == userEncry(password ~ info["salt"]))
		{
			model.where("username","=",username).update(["updated_at":TimeHelper.getCurrUnixStramp]);
			return info;
		}
		
		throwExceptionBuild!"PasswdError"();
		return null;
	}

	public static int add(string username,string email,string password)
	{
		auto check = model.where("username","=",username).get();
		if(check)
			throwExceptionBuild!"ExistUser"();
		auto check1 = model.where("email","=",email).get();
		if(check1)
			throwExceptionBuild!"ExistEmail"();

		string salt = getSalt();
		string sPassword = userEncry(password ~ salt);

		string[string] user = [
			"email" : email,
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
		log(info,service);
		auto time = TimeHelper.getCurrUnixStramp();
		string token = userEncry(info["id"] ~ info["username"] ~ time);
		string[string] cache = [
			"username" : info["username"],
			"email" : info["email"],
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
		
		auto uri = parseURL(service);
		auto st = userEncry(token~uri.host);
		mem.set(memPrefix ~ st,token);
		return service ~ "?st=" ~ st;
	}

	public static JSONValue validate(string service,string st)
	{
		log(service,st);
		auto uri = parseURL(service);
		auto tgc = mem.get(memPrefix ~ st);
		log(memPrefix,tgc);
		if(!tgc.length)
			throwExceptionBuild!"PasswdError"();
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