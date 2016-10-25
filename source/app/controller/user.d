module app.controller.user;

import std.math;
import std.json;
import std.digest.md;
import std.net.curl;
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
}
