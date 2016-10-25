module app.model.basicmodel;

import std.conv;
import std.format;
import std.stdio;
import std.datetime;
import std.experimental.logger;
import core.thread;
import core.stdc.time;

import app.helper;
import app.config;
import app.common;
import kerisy.db.sql.factory;

mixin template ModelCommon()
{
	override @property const string SQL()
	{
		return this.sql;
	}
	override const string getTableName()
	{
		return this.tableName;
	}

	override int insert(string[string] columnsToModify)
	{
		log("DB insert :::: ",columnsToModify);
		auto time = TimeHelper.getCurrUnixStramp();
		columnsToModify["created_at"] = time;
		columnsToModify["updated_at"] = time;
		return this.factory.sqlClient.insert(this.getTableName(),columnsToModify);
	}

	override int update(string[string] columnsToModify, string[string] whereCondition)
	{
		log("DB update :::: ",columnsToModify,whereCondition);
		auto time = TimeHelper.getCurrUnixStramp();
		columnsToModify["updated_at"] = time;
		return this.factory.sqlClient.update(this.getTableName(),columnsToModify,whereCondition);
	}

	override int remove(string[string] whereCondition)
	{
		log("DB remove :::: ",whereCondition);
		return this.factory.sqlClient.remove(this.getTableName(),whereCondition);
	}

	override string[string] getDataByID(int id)
	{
		if(!id)
		{
			return null;
		}

		try
		{
			auto select = format("select * from %s where id = '%s';",this.getTableName(),id);
			log("DB getDataByID :::: ",select);			
			auto result = this.factory.sqlClient.query(select);
			if(result.length())
			{
				return result.front.toAA();
			}
		}
		catch (Exception e)
		{
			log(e.msg);
		}

		return null;
	}

	override string[string] getDataByWhere(string[string] whereCondition)
	{
		log("model getDataByWhere whereCondition :::: ",whereCondition);
		if(!whereCondition.length)
		{
			return null;
		}

		try
		{
			string where = "";
			foreach(key,value;whereCondition)
			{
				where ~= format(" and `%s` = '%s' ",key,value);
			}
			auto select = format("select * from %s where 1 = 1 %s ;",this.getTableName(),where);
			log("DB getDataByWhere :::: ",select);			
			auto result = this.factory.sqlClient.query(select);
			if(result.length())
			{
				return result.front.toAA();
			}
		}
		catch (Exception e)
		{
			log(e.msg);
		}

		return null;
	}

	override string[string][] getMultiDataByWhere(string[string] whereCondition,int limit = 20,int offset = 0,string order = "")
	{
		if(!whereCondition)
		{
			return null;
		}
		try
		{
			if(limit == 0)
			{
				limit = 10000000;
			}
			string where = "";
			string select = "";
			foreach(key,value;whereCondition)
			{
				where ~= format(" and `%s` = '%s' ",key,value);
			}
			if(order.length)
			{
				select = format("select * from %s where 1 = 1 %s order by `%s` desc  limit %s offset %s;",this.getTableName(),where,order,limit,offset);
			}
			else
			{
				select = format("select * from %s where 1 = 1 %s limit %s offset %s;",this.getTableName(),where,limit,offset);
			}
			log("DB getDataByWhere :::: ",select);			
			auto result = this.factory.sqlClient.query(select);
			string[string][] getResult;
			if(result.length())
			{
				foreach(value;result)
				{   
					getResult ~= value.toAA();
				}
				return getResult;
			}
		}
		catch (Exception e)
		{
			log(e.msg);
		}

		return null;
	}
	override string[string][] getData()
	{
		try
		{
			auto select = format("select * from %s ;",this.getTableName());
			log("DB getData :::: ",select);			
			auto result = this.factory.sqlClient.query(select);
			string[string][] getResult;
			if(result.length())
			{
				foreach(value;result)
				{   
					getResult ~= value.toAA();
				}
				return getResult;
			}
		}
		catch (Exception e)
		{
			log(e.msg);
		}

		return null;
	}

	override string[string][] getDataBySQL(string sql)
	{
		if(!sql.length)
		{
			return null;
		}
		try
		{
			log("DB getDataBySQL :::: ",sql);			
			auto result = this.factory.sqlClient.query(sql);
			string[string][] getResult;
			if(result.length())
			{
				foreach(value;result)
				{   
					getResult ~= value.toAA();
				}
				return getResult;
			}
		}
		catch (Exception e)
		{
			log(e.msg);
		}

		return null;
	}

	override int createIfNotExist(string[string] columnsToModify, string[string] whereCondition)
	{
		auto info = getDataByWhere(whereCondition);
		if(info.length)
		{
			import app.common;
			return CommonHelper.safeConvert!(string,int)(info["id"]);
		}
		else
		{
			return insert(columnsToModify);
		}
	}

	override int updateOrCreate(string[string] columnsToModify, string[string] whereCondition)
	{
		log("updateOrCreate::::");
		log(columnsToModify);
		log(whereCondition);
		auto info = getDataByWhere(whereCondition);
		if(info.length)
		{
			return update(columnsToModify,whereCondition);
		}
		else
		{
			return insert(columnsToModify);
		}
	}

	override BasicModel where(string filed,string operation,string value)
	{
		this.whereStr ~= this.whereStr.length ? " and " : " where ";
		this.whereStr ~= " `" ~filed ~ "` " ~ operation ~ "'" ~ value ~ "'";
		return this;
	}
	override BasicModel orderBy(string order,string sort)
	{
		this.orderByStr = " ORDER BY " ~ order ~ " " ~ sort;
		return this;
	}
	override BasicModel limit(string limit)
	{
		this.limitStr = " LIMIT " ~ limit;	
		return this;
	}
	override BasicModel offset(string offset)
	{
		this.offsetStr = " OFFSET " ~ offset;
		return this;
	}
	override BasicModel take(string page)
	{
		this.limitStr = " LIMIT 20 ";	
		this.offsetStr = " OFFSET " ~ to!string(20 * (to!int(page) -1));
		return this;
	}
	override int del()
	{
		scope(exit)init();
		this.sql = "DELETE FROM " ~ this.tableName ~ this.whereStr;
		this.factory.sqlClient.query(this.sql);
		return 1;
	}
	override int update(string[string] columnsToModify)
	{
		scope(exit)init();
		this.sql = "UPDATE " ~ this.tableName ~ " set ";
		auto time = TimeHelper.getCurrUnixStramp();
		columnsToModify["updated_at"] = time;
		foreach(k,v;columnsToModify)
		{
			this.sql ~= " `" ~ k ~ "` = '" ~ v ~ "',";	
		}
		this.sql = this.sql[0..$-1];
		this.sql ~= this.whereStr;
		this.getDataBySQL(this.sql);
		return 1;
	}
	override string[string] get(string[] getFileds = null)
	{
		auto data = this.gets();
		return data.length ? data[0] : null;
	}
	override string[string][] gets(string[] getFileds = null)
	{
		scope(exit)init();
		this.sql = "SELECT  ";
		if(getFileds.length)
		{
			foreach(v;getFileds)
			{
				this.sql ~= v ~ ",";	
			}
			this.sql = this.sql[0..$-1];
		}
		else
		{
			this.sql ~= " * ";
		}
		this.sql ~= " from " ~ this.tableName;
		if(this.whereStr.length)this.sql ~= this.whereStr;
		if(this.orderByStr.length)this.sql ~= this.orderByStr;
		if(this.limitStr.length)this.sql ~= this.limitStr;
		if(this.offsetStr.length)this.sql ~= this.offsetStr;
		return this.getDataBySQL(this.sql);
	}
	override string count()
	{
		scope(exit)init();
		this.sql = "SELECT COUNT(*) FROM " ~ this.tableName;
		if(this.whereStr.length)this.sql ~= this.whereStr;
		auto data = this.getDataBySQL(this.sql);
		if(data.length && data[0].length)
			return data[0]["COUNT(*)"];
		return null;
	}

	override void init()
	{
		this.sql = "";
		this.whereStr = "";
		this.orderByStr = "";
		this.limitStr = "";
		this.offsetStr = "";
	}
}

abstract class BasicModel
{
	public{
		string tableName = "bbs_";
		string sql = "";
		DbFactory factory;
		string whereStr = "";
		string orderByStr = "";
		string limitStr = "";
		string offsetStr = "";
	}
	this(){this.factory = sqlInstance;}
	void init();
	@property const string SQL();
	const string getTableName();
	int insert(string[string] columnsToModify);
	int update(string[string] columnsToModify, string[string] whereCondition);
	int remove(string[string] whereCondition);
	string[string] getDataByID(int id);
	string[string] getDataByWhere(string[string] whereCondition);
	string[string][] getMultiDataByWhere(string[string] whereCondition,int limit = 20,int offset = 0,string order = "");
	string[string][] getData();
	string[string][] getDataBySQL(string sql);
	int createIfNotExist(string[string] columnsToModify, string[string] whereCondition);
	int updateOrCreate(string[string] columnsToModify, string[string] whereCondition);
	BasicModel where(string filed,string operation,string value);
	BasicModel orderBy(string order,string sort);
	BasicModel limit(string limit);
	BasicModel offset(string offset);
	BasicModel take(string page);
	int del();
	string count();
	int update(string[string] whereCondition);
	string[string][] gets(string[] getFileds = null);
	string[string] get(string[] getFileds = null);
}
