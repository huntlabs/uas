/*
 * Hunt - a framework for web and console application based on Collie using Dlang development
 *
 * Copyright (C) 2015-2016  Shanghai Putao Technology Co., Ltd 
 *
 * Developer: putao's Dlang team
 *
 * Licensed under the BSD License.
 *
 */
module app.middleware;

import std.conv;
import std.json;
import std.functional;
import std.digest.md;

import hunt;

import app.base;
import app.model;
import app.config;
import app.common;
import app.common.time;
import app.helper;

class UserAuthMiddleware : IMiddleware
{
	override string name()
	{
		return UserAuthMiddleware.stringof;
	}
	override bool onProcess(Request req, Response res)
	{
		JSONValue jcache;
		string cache;
		auto path = req.Header.path;
		auto blackLists = ["/question/add","/answer/add","/user/editInfo","user/editAvatar"];
		auto token = req.getCookieValue("token");
		auto time = req.getCookieValue("time");
		auto uid = req.getCookieValue("uid");
		auto username = req.getCookieValue("username");
		auto ccs = req.getCookieValue("ccs");

		if(!canFind(blackLists,path))
		{
			goto ultimate;
		}

		if(!token.length || !time.length || !uid.length || !username.length || !ccs.length)
		{
			goto target;
		}

		if(to!int(time) + 60 * 60 * 24 * 30 < TimeHelper.getCurrUnixStrampInt())
		{
			goto target;
		}

		if(CommonHelper.encry(uid ~ username ~ time ~ token ~ SERVER_SECRET_KEY) != ccs)
		{
			goto target;
		}

		cache = mem.get(memPrefix ~ token);
		log("cache : ",cache);
		if(!cache.length)
		{
			log("check point 3 , not found cache from memcache");
			goto target;
		}

		try 
		{
			jcache = parseJSON(cache);
			log("jcache : ",jcache);
			log("jcache token : ",jcache["token"].str);
			log("jcache username : ",jcache["username"].str);
			log("jcache token : ",jcache["time"].str);

			if(jcache["id"].str == "1")
			{
				goto ultimate;
			}

			if(jcache["token"].str != token || jcache["time"].str != time)
			{
				log("check point 4 , cookie != cache");
				goto target;
			}

		} 
		catch
		{
			goto target;
		}

		goto ultimate;

target :
		{
			log("into target ,redirect login");
			res.redirect("/login");
			res.done;
			return false;
		}

ultimate :
		{
			log("user auth process complete ");
			return true;
		}
	}
}
