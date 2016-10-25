module application.db.ssdbclient;

import std.bitmanip;
import core.memory;
import std.experimental.logger;
public import std.socket;
public import std.string;
public import std.array;
public import std.conv;

class SSDBClient
{
	this(AddressFamily family)
	{
		this(new TcpSocket(family));
	}
	
	this(Address connectTo)
	{
		auto socket = new TcpSocket(connectTo);
		socket.setKeepAlive(120,120);
		_addr = connectTo;
		this(socket);
		
	}
	
	this( TcpSocket socket)
	{
		_socket = socket;
		
	}
	
	~this()
	{
		_socket.destroy;
	}
	
	void connect(Address to){_socket.connect(to);_socket.setKeepAlive(120,120);_addr = to;}
	
	Address remoteAddress(){return _socket.remoteAddress();}
	
	void close(){_socket.close();}
	
	string getErrorText(){return _socket.getErrorText();}
	
	bool ping ()
	{
		auto send = cast(ubyte[])("4\nping\n\n");
		auto bRet = this._send(send);
		if (!bRet)
		{
			return false;
		}
		string strRet = cast(string)(this._revice());
		if (strRet.indexOf("ok") != -1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	private bool _send(ubyte[] cmd)
	{
		auto bRet = _socket.send(cmd);
		if (bRet == cmd.length)
		{
			return true;
		}
		
		_socket.close();
		_socket.destroy;
		GC.free(cast(void *) _socket);
		_socket = new TcpSocket(_addr);
		return (cmd.length == _socket.send(cmd));
	}

	enum MAX_BYTE_PRE_REVICE = 4096;

	private ubyte[] _revice()
	{
		Appender!(ubyte[]) ln = appender!(ubyte[]);
		ubyte[] buffer = new ubyte[MAX_BYTE_PRE_REVICE];
		ptrdiff_t  len = 0;
		do{
			len = _socket.receive(buffer);
			if(len <= 0)
				throw new Exception("socket error");
			ln.put(buffer[0 .. len]);
		}while(len ==MAX_BYTE_PRE_REVICE);

		return ln.data;
	}
	
	bool set (string key, string data, int expires = 0)
	{
		auto send = cast(ubyte[])format("%s\nset\n%s\n%s\n%s\n%s\n\n", 3, key.length, key, data.length, data);
		bool bRet = this._send(send);
		if (!bRet)
		{
			return false;
		}

		string strRet = cast(string)(this._revice());
		if (strRet.indexOf("ok") != -1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	bool setx(string key, string data, int expires = 0)
	{
		auto send = cast(ubyte[])format("%s\nsetx\n%s\n%s\n%s\n%s\n%s\n%s\n\n", 4, key.length, key, data.length, data,to!string(expires).length, expires);
		bool bRet = this._send(send);
		if (!bRet)
		{
			return false;
		}

		string strRet = cast(string)(this._revice());
		if (strRet.indexOf("ok") != -1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	
	string get(string key, lazy string _def = "")
	{	
		auto send = cast(ubyte[])format("%s\nget\n%s\n%s\n\n", 3, key.length, key);
		bool bRet = _send(send);
		if (bRet == false)
		{
			return _def;
		}

		string buffer = cast(string)(this._revice());
		if(buffer.indexOf("ok") != -1)
		{
			string[] splitRet = buffer.splitLines();
			return splitRet[3];
		}

		return _def;
	}

	bool del(string key)
	{
		auto send = cast(ubyte[])format("%s\ndel\n%s\n%s\n\n", 3, key.length, key);
		bool bRet = _send(send);
		if (bRet == false)
		{
			return false;
		}
		string buffer = cast(string)(this._revice());
		if(buffer.indexOf("ok") != -1)
		{
			return true;
		}
		
		return false;
	}

	bool hset(string key, string hashKey, string Value)
	{
		auto send = cast(ubyte[])format("%s\nhset\n%s\n%s\n%s\n%s\n%s\n%s\n\n", 4, key.length, key, to!string(hashKey).length, hashKey, to!string(Value).length, Value);
		bool bRet = _send(send);
		if (bRet == false)
		{
			return false;
		}
		string buffer = cast(string)(this._revice());
		if(buffer.indexOf("ok") != -1)
		{
			return true;
		}
		
		return false;
	}

	string hget(string key, string hashKey) 
	{
		auto send = cast(ubyte[])format("%s\nhget\n%s\n%s\n%s\n%s\n\n", 4, key.length, key, to!string(hashKey).length, hashKey);
		bool bRet = _send(send);
		if (bRet == false)
		{
			return "";
		}
		string strRet = cast(string)(this._revice());
		if(strRet.indexOf("ok") != -1) 	
		{
			string[] splitRet = strRet.splitLines();
			return splitRet[3];
		}
		return "";
	}

	string[string] hgetall(string key)
	{
		string[string] ret;
		auto send = cast(ubyte[])format("%s\nhgetall\n%s\n%s\n\n", 7, key.length, key);
		bool bRet = _send(send);
		if (bRet == false)
		{
			return ret;
		}
		else
		{
			string strTmep;
			bool bFound = false;
			
			while (true)
			{
				string strRet = cast(string)(_revice());				
				if (strRet.indexOf("ok") != -1) 
					bFound = true;
				if (bFound == true) 
					strTmep ~= strRet;
				if (strTmep.indexOf("\n\n") != -1) 
					break;
			}
			
			if (bFound == true)
			{
				string[] splitRet = strTmep.splitLines();
				for (size_t i = 2; i < splitRet.length - 2; i++)
				{
					if (i % 2 != 0)
					{
						ret[splitRet[i]] = splitRet[i + 2];
						i += 2;
					}
				}
			}
		}
		
		///
		return ret;
	}
			
	int hincr(string key, string hashKey, int _default = 1)
	{
		string ret;
		auto send = cast(ubyte[])format("%s\nhincr\n%s\n%s\n%s\n%s\n%s\n%s\n\n", 5, key.length, key, to!string(hashKey).length, hashKey, to!string(_default).length, to!string(_default));
		bool bRet = _send(send);
		
		if (bRet == false)
		{
			throw new Exception("hincr is error!");
		}

			
		string strRet = cast(string)(_revice());			
		if(strRet.indexOf("ok") != -1) 	
		{
			string[] splitRet = strRet.splitLines();
			ret = splitRet[3];
		}
		
		///
		return to!int(ret);
	}

	int hdecr(string key, string hashKey, int _default = 1)
	{
		string ret;		
		auto send = cast(ubyte[])format("%s\nhdecr\n%s\n%s\n%s\n%s\n%s\n%s\n\n", 5, key.length, key, to!string(hashKey).length, hashKey, to!string(_default).length, to!string(_default));
		bool bRet = _send(send);
		
		if (bRet == false)
		{
			throw new Exception("hdecr is error!");
		}
		else
		{
		
			string strRet = cast(string)(_revice());			
			if(strRet.indexOf("ok") != -1) 	
			{
				string[] splitRet = strRet.splitLines();
				ret = splitRet[3];
			}
		}
		return to!int(ret);
	}

	int incr(T = int)(string key, int _default = 1)
	{
		string ret;		
		auto send = cast(ubyte[])format("%s\nincr\n%s\n%s\n%s\n%s\n\n", 4, key.length, key, to!string(_default).length, to!string(_default));		
		bool bRet = _send(send);
		
		if (bRet == false)
		{
			throw new Exception("incr is error!");
		}
		else
		{
			string strRet = cast(string)(_revice());			
			if(strRet.indexOf("ok") != -1) 	
			{
				string[] splitRet = strRet.splitLines();
				ret = splitRet[3];
			}
		}
		return to!int(ret);
	}
	
	int decr(T)(string key, int _default = 1)
	{
		T ret;		
		auto send = cast(ubyte[])format("%s\ndecr\n%s\n%s\n%s\n%s\n\n", 4, key.length, key, to!string(_default).length, to!string(_default));		
		bool bRet = _send(send);
		
		if (bRet == false)
		{
			throw new Exception("incr is error!");
		}
		else
		{

			string strRet = cast(string)(_revice());			
			if(strRet.indexOf("ok") != -1) 	
			{
				string[] splitRet = strRet.splitLines();
				ret = splitRet[3].to!T;
			}
		}
		
		///
		return to!int(ret);
	}

	size_t hlen(string key) 
	{
		static assert("ssdb doesn't support this method");
		return 0;
	}

	T[] hkeys(T)(string key) 
	{
		static assert("ssdb doesn't support this method");
		return null;
	}
	
	bool hdel(T)(string key, T hashKey)
	{
		auto send = cast(ubyte[])format("%s\nhdel\n%s\n%s\n%s\n%s\n\n", 4, key.length, key, to!string(hashKey).length, hashKey);		
		bool bRet = _send(send);
		
		if (bRet == false)
		{
			return	false;
		}
		else
		{
			string strRet = cast(string)(_revice());			
			if (strRet.indexOf("ok") != -1)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}
			
	bool pushBack(N, M)(N key, M data)
	{
		auto send = cast(ubyte[])format("%s\nqpush_back\n%s\n%s\n%s\n%s\n\n", 10, to!string(key).length, to!string(key), to!string(data).length, data);		
		bool bRet = _send(send);

		if (bRet == false)
		{
			return false;
		}
		else
		{
			string strRet = cast(string)(_revice());			
			if (strRet.indexOf("ok") != -1)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}

	M popBack(N, M)(N key)
	{
		M ret;
		auto send = cast(ubyte[])format("%s\nqpop_back\n%s\n%s\n\n", 9, to!string(key).length, to!string(key));		
		bool bRet = _send(send);
		
		if (bRet == false)
		{
			return ret.init;
		}
		else
		{
		
			string strRet = cast(string)(_revice());				
			if(strRet.indexOf("ok") != -1) 	
			{
				string[] splitRet = strRet.splitLines();
				ret = splitRet[3].to!M;
			}
		}
		
		return ret;
	}

	bool pushFront(N, M)(N key, M data)
	{
		auto send = cast(ubyte[])format("%s\nqpush_front\n%s\n%s\n%s\n%s\n\n", 10, to!string(key).length, to!string(key), to!string(data).length, data);		
		bool bRet = _send(send);		
		if (bRet == false)
		{
			return false;
		}
		else
		{
		
			string strRet = cast(string)(_revice());			
			if (strRet.indexOf("ok") != -1)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}
	/*
	M popFront(N, M)(N key)
	{
		M ret;		
		auto send = cast(ubyte[])format("%s\nqpop_front\n%s\n%s\n\n", 9, to!string(key).length, to!string(key));		
		bool bRet = _ssdbClient.send(send);
		
		if (bRet == false)
		{
			return ret.init;
		}
		else
		{
			Appender!(ubyte[]) ln = appender!(ubyte[]);
			ubyte[] result;
			do
			{
				result = _ssdbClient.recv();
				ln.put(result);
			}
			while (result.length == MAX_MESSAGE_LEGNTH || _ssdbClient.serviceStatus == SERVICE_STATUS.BLOCK);
			
			string strRet = cast(string)(ln.data);	
			if(strRet.indexOf("ok") != -1) 	
			{
				string[] splitRet = strRet.splitLines();
				ret = splitRet[3].to!M;
			}
		}
		
		return ret;
	}
	
	RETURN_STATE clear(N)(N key)
	{
		auto send = cast(ubyte[])format("%s\nqclear\n%s\n%s\n\n", 6, to!string(key).length, to!string(key));		
		bool bRet = _ssdbClient.send(send);		
		if (bRet == false)
		{
			return RETURN_STATE.ERROR;
		}
		else
		{
			Appender!(ubyte[]) ln = appender!(ubyte[]);
			ubyte[] result;
			do
			{
				result = _ssdbClient.recv();
				ln.put(result);
			}
			while (result.length == MAX_MESSAGE_LEGNTH || _ssdbClient.serviceStatus == SERVICE_STATUS.BLOCK);
			
			string strRet = cast(string)(ln.data);			
			if (strRet.indexOf("ok") != -1)
			{
				return RETURN_STATE.SUCCESS;
			}
			else
			{
				return RETURN_STATE.ERROR;
			}
		}
	}
	
	string[] slice(N)(N key, int start, int end)
	{
		string[] ret;		
		auto send = cast(ubyte[])format("%s\nqslice\n%s\n%s\n%s\n%s\n%s\n%s\n\n", 6, to!string(key).length, to!string(key), to!string(start).length, start, to!string(end).length, end);
		bool bRet = _ssdbClient.send(send);
		
		if (bRet == false)
		{
			return ret;
		}
		else
		{
			string strTmep;
			bool bFound = false;
			
			while (true)
			{
				ubyte[] buffer = _ssdbClient.recv();
				string ln = cast(string)buffer;
				
				if (ln.indexOf("ok") != -1) bFound = true;
				if (bFound == true) strTmep ~= ln;
				if (strTmep.indexOf("\n\n") != -1) break;
			}
			
			if (bFound == true)
			{
				string[] splitRet = strTmep.splitLines();
				for (size_t i = 2; i < splitRet.length - 1; i++)
				{
					if (i % 2 != 0)
					{
						ret ~= splitRet[i];
					}
				}
			}
		}
		
		///
		return ret;
	}
	
	int size(N)(N key)
	{
		string ret;
		auto send = cast(ubyte[])format("%s\nqsize\n%s\n%s\n\n", 5, to!string(key).length, to!string(key));
		bool bRet = _ssdbClient.send(send);
		
		if (bRet == false)
		{
			return 0;
		}
		else
		{
			Appender!(ubyte[]) ln = appender!(ubyte[]);
			ubyte[] result;
			do
			{
				result = _ssdbClient.recv();
				ln.put(result);
			}
			while (result.length == MAX_MESSAGE_LEGNTH || _ssdbClient.serviceStatus == SERVICE_STATUS.BLOCK);
			
			string strRet = cast(string)(ln.data);			
			if(strRet.indexOf("ok") != -1)
			{
				string[] splitRet = strRet.splitLines();
				ret = splitRet[3];
			}
		}
		
		return ret.to!int;
	}
	*/
	
private:
	TcpSocket _socket;
	Address _addr;
}

