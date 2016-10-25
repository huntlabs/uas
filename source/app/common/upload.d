module app.common.upload;

import std.conv;
import std.json;
import std.stdio;
import std.base64;
import std.datetime;
import std.digest.md;
import core.stdc.time;

import app.common;
import app.base;
import app.config;

class UploadHelper
{
	public static string getToken()
	{
		auto key = TimeHelper.getTodayZeroHourUnixStramp();
		auto info = mem.get(memPrefix ~ "upload_token_" ~ to!string(key));
		if(info.length)
		{
			return info;
		}
		else
		{
			int deadline = TimeHelper.getCurrUnixStrampInt() + 24 * 3600;
			int[string] params = [
				"deadline" : deadline
			];

			auto policy = JSONValue(params);
			auto encodePolicy = CommonHelper.urlSafeBase64Encode(cast(ubyte[])policy.toString());

			auto sign = CommonHelper.hmac_sha1(cast(ubyte[])encodePolicy,cast(ubyte[])uSecretKey);
			auto encodeSign = CommonHelper.urlSafeBase64Encode(sign);
			auto token = uAccessKey ~ ":" ~ cast(string)encodeSign ~ ":" ~ cast(string)encodePolicy;
			if(mem.set(memPrefix ~ "upload_token_" ~ to!string(key),token))
			{
				return token;
			}
			else
			{
				return null;
			}
		}
	}
}
