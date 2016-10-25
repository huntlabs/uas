module app.model.user;

import std.stdio;
import std.format;
import std.experimental.logger;
import core.thread;
import core.stdc.time;

import hunt;
import app.model;
import app.common;
import kerisy.db.sql.factory;

class UserModel : BasicModel 
{
	public{
		string tableName = "bbs_user";
		static BasicModel _model;
		struct UserInfo {
			string id;
			string username;
			string password;
			string email;
			string created_at;
			string updated_at;
		}
	}

	static @property getInstance(){
		if(_model is null)
		{
			_model = new UserModel();
		}
		return _model;
	}

	mixin ModelCommon;
}
