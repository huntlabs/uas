module app.common.common;
import std.uri;
import std.stdio;
import std.conv;
import std.json;
import std.array;
import std.string;
import std.format;
import std.regex;
import std.base64;
import std.random;
import std.datetime;
import std.typecons;
import std.algorithm;
import std.digest.md;
import std.digest.sha;
import Curl = std.net.curl;
import std.algorithm.searching;
import std.experimental.logger;
import core.stdc.time;
import app.common;
class CommonHelper
{
	public static enum Gender
	{
		unset = "0",
		male = "1",
		famale = "2",
		other = "3",
		unsetZH = "未设置",
		maleZH = "男",
		famaleZH = "女",
		otherZH = "其他"
	}
	public static enum GenderNoToZH = [
		Gender.unset : Gender.unsetZH,
		Gender.male : Gender.maleZH,
		Gender.famale : Gender.famaleZH,
		Gender.other : Gender.otherZH,
	];
	public static enum GenderZHToNo = [
		Gender.unsetZH : Gender.unset,
		Gender.maleZH : Gender.male,
		Gender.famaleZH : Gender.famale,
		Gender.otherZH : Gender.other,
	];
	public static bool hasSpecialChar(string check)
	{
		auto c = matchAll(check, regex("[`~!@#$%^&*()+=|{}':;',\\[\\].<>\\/\\?！￥……（）——【】‘；”“’。，、？]"));
		if(c.empty())
		{
			return false;
		}
		return true;
	}
	public static string text(T...)(T args) { return textImpl!string(args); }
	public static wstring wtext(T...)(T args) { return textImpl!wstring(args); }
	public static dstring dtext(T...)(T args) { return textImpl!dstring(args); }
	private static S textImpl(S, U...)(U args)
	{
		static if (U.length == 0)
		{
			return null;
		}
		else
		{
			auto result = to!S(args[0]);
			foreach (arg; args[1 .. $])
			{
				result ~= to!S(arg);
			}
			return result;
		}
	}
	public static ubyte[] post(string ctype = "application/x-www-form-urlencoded", long tmout = 30)(string requestURL,ubyte[] data)
	{
		log("POST URL : ",requestURL);
		log("POST DATA : ",cast(string)data);
		ubyte[] reqResult;
		auto http = Curl.HTTP();
		http.method = Curl.HTTP.Method.post;
		http.url = requestURL;
		//http.postData = upostData;
		http.setPostData(data, ctype);
		http.operationTimeout = dur!"seconds"(tmout);
		//reqResult = Curl.post(requestURL, upostData);
		http.onReceive = (ubyte[] data) {reqResult~=data; return data.length; };
		http.perform();
		log("POST RESULT : ",cast(string)reqResult);
		return reqResult;
	}
	public static ubyte[] post(string ctype = "application/x-www-form-urlencoded", long tmout = 30)(string requestURL,string[string] postData)
	{
		string fpostData = formatPostData(postData);
		ubyte[] upostData = cast(ubyte[])fpostData;
		return post!(ctype,tmout)(requestURL,upostData);
	}
	public static JSONValue unsafePost(string requestURL,string[string] postData)
	{
		JSONValue jsonReqResult;
		ubyte[] reqResult = post(requestURL,postData);
		jsonReqResult = parseJSON(cast(string)reqResult);
		return jsonReqResult;
	}
	public static JSONValue post(string requestURL,string[string] postData,out int error_code)
	{
		error_code = 0;
		if(!postData || !requestURL.length)
		{
			error_code = 1;
			return JSONValue.init;
		}
		JSONValue jsonReqResult;
		try
		{
			ubyte[] reqResult = post(requestURL,postData);
			jsonReqResult = parseJSON(cast(string)reqResult);
			if(jsonReqResult["error_code"].integer != 0)
			{
				error_code = cast(int)jsonReqResult["error_code"].integer;
			}
		}
		catch (Exception e)
		{
			error_code = ErrorCodeHelper.ErrorCode.HandleFailed;
			JSONValue eresult;
			eresult["error_code"] = ErrorCodeHelper.ErrorCode.HandleFailed;
			eresult["msg"] = e.msg;
			return eresult;
		}
		return jsonReqResult;
	}
	public static string formatPostData(string[string] postData)
	{
		string result;
		foreach(key,value;postData)
		{
			result ~= key ~ "=" ~ encodeComponent(value) ~ "&";
		}
		//string endResult = encodeComponent(result);
		log(result);
		return result;
	}
	public static string aa_sorted_sign(string[string] data, string sign_key = string.init)
	{
		auto sortbb= aa_sort(data);
		string[] need_md5;
		foreach( cc ; sortbb)
		{
			if(cc[0] == "sign")
			{
				continue;
			}
			need_md5 ~= cc[0] ~ "=" ~ encodeComponent(cc[1]);
		}
		return toHexString(md5Of(need_md5.join('&') ~ sign_key)).toLower();
	}
	public static Tuple!(K, V)[] aa_sort(K, V)(V[K] aa){
		typeof(return) r=[];
		foreach(k,v;aa) r~=tuple(k,v);
		sort!q{a[0]<b[0]}(r);
		return r;
	}
	public static string getRandomString(string flag="",int length = 6)
	{
		string seed = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
		string result = "";
		while(length)
		{
			result ~= seed[uniform(0,62)];
			length--;
		}
		return flag ~ result;
	}
	public static string encry(string str)
	{
		log(str);
		auto md5 = new MD5Digest();
		return toHexString(md5.digest(str));
	}
	public static T safeConvert(F,T)(F value)
	{
		try
		{
			return to!T(value);
		}
		catch
		{
			return T.init;
		}
	}

	///基于Base64 做的safeBase64
	public static char[]  urlSafeBase64Encode(ubyte[] src)
	{
		auto encoded = Base64.encoder(src);

		char[] des;
		char tmp;
		foreach(en; encoded)
		{
			tmp = cast(char) en;
			if(tmp == '+')
				tmp = '-';
			if(tmp == '/')
				tmp = '_';
			des ~= tmp;
		}
		return des;
	}
	///基于Base64 做的Decoder
	public static char[] urlSafeBase64Decoder(char[] src)
	{
		char[] value;
		char[] output;
		int count=0;

		foreach(chr; src)
		{
			if(chr == '_')
				value ~= '-';
			else if(chr == '/')
				value ~= '+';
			else
			{
				value ~= chr;
			}
		}

		auto decoded = Base64.decoder(cast(ubyte[]) value);
		foreach(decodeElement; decoded)
		{
			if(decodeElement > 0xff)
				return null;//越界
			output ~= cast(char) decodeElement;
		}

		return output;
	}

	//hash_hmac('sha1',$encodedPutPolicy,$secertKey,true)
	///plainText : 明文； secertKey : 私钥
	public static ubyte[]  hmac_sha1(ubyte[] plainText, ubyte[] secertKey)
	{
		char[] hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		ubyte fByte, lByte;
		if(plainText.length == 0 ||
				secertKey.length ==0)
			return null;
		auto hmac = new HMAC!SHA11();
		hmac.setKey(secertKey);
		hmac.put(plainText);
		char[] des;
		ubyte[] value = hmac.finish();
		foreach(hm; value)
		{
			fByte = hm>>4;
			lByte = hm&0x0f;
			des ~= hex[fByte];
			des ~= hex[lByte];
		}

		return value;
	}
	public static char[] ubyte2char(ubyte[] input)
	{
		char[] output;
		//char[] hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		foreach(ub; input)
		{
			if(ub > 0xff)
				return null;//越界
			output ~= cast(char) ub;
		}
		return output;
	}
}
