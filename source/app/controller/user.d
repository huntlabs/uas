module app.controller.user;

import std.math;
import std.json;
import std.digest.md;
import std.net.curl;
import std.uri;
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
		checkParamsLength(service);
		auto dservice = decodeComponent(service);
		auto tgc = req.getCookieValue("tgc");

		if(!tgc.length)
		{
			view.service = service;
			view.title = "login";
			render!"user/login.html"();
		}
		else
		{
			auto uri = parseURL(dservice);
			auto st = UserHelper.userEncry(tgc ~ uri.host);
			redirect(dservice~"?st="~st);	
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
		auto username = req.post("username");
		auto password = req.post("password");
		checkParamsLength(service,username,password);

		auto result = UserHelper.userCheck(username,password);

		auto r = UserHelper.setLogin(this,result,service);

		successJson(r);
	}

	@action
	void register()
	{
		auto service = req.get("service");
		view.service = service;
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
		auto username = req.post("username");
		auto password = req.post("password");
		auto repassword = req.post("repassword");
		checkParamsLength(username,password,repassword);
		checkPasswordSame(password,repassword);

		auto result = UserHelper.add(username,password);

		auto info = UserHelper.getData(to!string(result));
		
		auto r = UserHelper.setLogin(this,info,service);

		successJson(r);
	}

	@action
	void validate()
	{
		runCatchException(this,&doValidate);
	}
	void doValidate()
	{
		auto service = req.post("service");
		auto tgc = req.post("tgc");
		auto st = req.post("st");

		checkParamsLength(service,tgc,st);
		auto result = UserHelper.validate(decodeComponent(service),tgc,st);
		successJson(result);
	}
}
