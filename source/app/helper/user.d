module app.helper.user;

import std.conv;
import std.json;
import std.stdio;
import std.array;
import std.random;
import std.string;
import std.digest.md;
import std.experimental.logger;

import hunt;

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
}
