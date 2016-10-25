module kerisy.db.sql.factory;

import kerisy.db.database;
import std.experimental.logger;
import core.thread;
import std.conv;
import std.string;

import hunt;
import app.config;
version(USE_MYSQL)
{
	import kerisy.db.driver.mysql;
}
else version(USE_PGSQL)
{
	import kerisy.db.driver.postgres;
}
else version(USE_Sqlite3)
{
	import kerisy.db.driver.sqlite;
}

/**
* 数据库操作
*/
class DbFactory{

	this ()
	{
		version (USE_MYSQL)
		{
			_connection = new MySql(MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DBNAME, MYSQL_PORT);

			assert(_connection);

			//set names
			_connection.query(std.string.format("SET NAMES '%s'", MYSQL_CHARSET));
		}
	}

	/**
	* Force the connection to close.
	*
	* @return void
	*/
	public void closeConnection()
	{
		if (isConnected()) {
			this._connection.close();
		}
		this._connection = null;
	}

	/**
	* Test if a connection is active
	*
	* @return boolean
	*/
	public bool isConnected()
	{
		if(this._connection is null)
		{
			return false;
		}
		
		auto beforeid = this._connection.getThreadId();
		if(0 == this._connection.pingMysql())
		{
			///reconnect
			if(beforeid != this._connection.getThreadId())
			{
				this._connection.query(std.string.format("SET NAMES '%s'", MYSQL_CHARSET));
			}
			return true;
		}
		else
		{
			return false;
		}
	}

	~this ()
	{		
		closeConnection();

		_connection.destroy;
	}

	@property sqlClient ()
	{
		isConnected();

		return _connection;
	}

	private{
		version(USE_MYSQL)
		{
			MySql _connection = null;
		}
		else version(USE_PGSQL)
		{
			PostgreSql _connection;
		}
		else version(USE_Sqlite3)
		{
			Sqlite _connection;
		}
	}

}

@property sqlInstance (string threadName = Thread.getThis().name)
{
	DbFactory sqlClient;

	if (threadName !in _dbFactorys) 
	{
		sqlClient = new DbFactory;
		
		_dbFactorys[threadName] = sqlClient;
	}
	
	return _dbFactorys[threadName];
}

@property sqlDestroy ()
{
	foreach (string name, DbFactory client; _dbFactorys)
	{
		_dbFactorys.remove(name);
		
		client.destroy;
	}
}

private:
	__gshared DbFactory[string]	_dbFactorys = null;

unittest
{
}
