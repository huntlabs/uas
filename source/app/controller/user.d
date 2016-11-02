module app.controller.user;

import std.math;
import std.json;
import std.digest.md;
import std.net.curl;
import std.uri;
import std.string;
import std.experimental.logger;

import hunt;
import hunt.view;

import app.base;
import app.model;
import app.config;
import app.common;
import app.common.time;
import app.helper;
import app.exception;
import app.middleware;

class UserController : BaseController
{
	mixin MakeController;
	this()
	{
		//addMiddleware(new UserAuthMiddleware());
	}

	@action
	void login()
	{
		auto service = req.get("service");
		auto callback = req.get("callback");
		checkParamsLength(service);
		auto dservice = decodeComponent(service);
		auto tgc = req.getCookieValue("tgc");

		if(!tgc.length)
		{
			view.service = encodeComponent(service);
			view.callback = encodeComponent(callback);
			view.title = "login";
			render!"user/login.html"();
		}
		else
		{
			if(dservice.length)
			{
				auto uri = parseURL(dservice);
				auto st = UserHelper.userEncry(tgc ~ uri.host);
				redirect(dservice~"?st="~st~"&callback="~callback);	
			}
			else
			{
				errorJson();
			}
		}
	}

	@action
	void postLogin()
	{
		runCatchException(this,&doPostLogin);
	}
	void doPostLogin()
	{
		auto service = req.post("service");
		auto callback = req.post("callback");
		auto username = req.post("username").toLower;
		auto password = req.post("password");
		checkParamsLength(service,username,password);

		auto result = UserHelper.userCheck(username,password);

		auto r = UserHelper.setLogin(this,result,decodeComponent(service));
		log(r);
		successJson(r ~ "&callback=" ~ encodeComponent(callback));
	}

	@action
	void register()
	{
		auto service = req.get("service");
		auto callback = req.get("callback");
		view.service = encodeComponent(service);
		view.callback = encodeComponent(callback);
		view.title = "register";
		render!"user/register.html"();
	}

	@action
	void postRegister()
	{
		runCatchException(this,&doPostRegister);
	}
	void doPostRegister()
	{
		auto service = req.post("service");
		auto callback = req.post("callback");
		auto username = req.post("username").toLower;
		auto email = req.post("email").toLower;
		auto password = req.post("password");
		auto repassword = req.post("repassword");
		checkParamsLength(username,email,password,repassword);
		checkPasswordSame(password,repassword);

		auto result = UserHelper.add(username,email,password);

		auto info = UserHelper.getData(to!string(result));
		
		auto r = UserHelper.setLogin(this,info,decodeComponent(service));

		successJson(r ~ "&callback=" ~ encodeComponent(callback));
	}

	@action
	void validate()
	{
		runCatchException(this,&doValidate);
	}
	void doValidate()
	{
		auto service = req.post("service");
		auto st = req.post("st");

		checkParamsLength(service,st);
		auto result = UserHelper.validate(decodeComponent(service),st);
		successJson(result);
	}

	@action
	void logout()
	{
		delCookie("tgc");
		delCookie("uid");
		delCookie("time");
		delCookie("username");
		delCookie("ccs");

		auto callback = req.get("callback");
		log(callback);
		callback = decodeComponent(callback);
		log(callback);
		redirect(callback);
	}
}
