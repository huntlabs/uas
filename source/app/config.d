module app.config;

import std.json;

import hunt.application;

import collie.libmemcache4d.memcache;
import application.db.ssdbclient;
import tinyredis.redis:Redis;

import app.helper;

import hunt.utils.path;
alias huntConfigPath = theExecutorPath;
string SERVER_DOMAIN;
string SERVER_HOST;
string SERVER_STATIC;
string PAGELIMIT = "20";
int PAGELIMITINT = 20;
string SERVER_SECRET_KEY = "400427";
//redis
Redis _redis;
string rhost;
ushort rport;
string rprefix = "bbs_";
//memcache
Memcache _mem;
string memPrefix;
string mhost;
string mport;
//mysql
string MYSQL_HOST;
ushort MYSQL_PORT;
string MYSQL_USERNAME;
string MYSQL_PASSWORD;
string MYSQL_DBNAME;
string MYSQL_CHARSET;
//log
string loglevel;
string logfile;
//image
string IMAGE_READ;
//ssdb
string SSDB_HOST;
ushort SSDB_PORT;
//image
string uAppid;
string uAccessKey;
string uSecretKey;
string uWrite;
string uRead;
Memcache mem()
{
	if(_mem is null)
	{
		_mem = new Memcache(mhost,to!ushort(mport));
	}
	return _mem;
}
Redis redis()
{
	if(_redis is null)
	{
		_redis = new Redis(rhost,rport);
	}
	return _redis;
}

static this()
{
	rport = iniInstance.redis.port.as!short;
	rhost = iniInstance.redis.host.value;

	mhost = iniInstance.memcached.host.value;
	mport = iniInstance.memcached.port.value;
	memPrefix = iniInstance.memcached.prefix.value;

	MYSQL_PORT = iniInstance.mysql.port.as!short;
	MYSQL_HOST = iniInstance.mysql.host.value;
	MYSQL_USERNAME = iniInstance.mysql.username.value;
	MYSQL_PASSWORD = iniInstance.mysql.password.value;
	MYSQL_DBNAME = iniInstance.mysql.dbname.value;
	MYSQL_CHARSET = iniInstance.mysql.charset.value;

	loglevel = iniInstance.log.level.value; 
	logfile = iniInstance.log.file.value; 
}

public @property auto iniInstance()
{
	return Application.getInstance.appConfig.config;
}

