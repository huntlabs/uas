module app.common.array;

import std.uri;
import std.stdio;
import std.conv;
import std.array;
import std.string;
import std.format;
import std.base64;
import std.random;
import std.datetime;
import std.digest.md;
import std.digest.sha;
import std.algorithm.searching;
import std.experimental.logger;
import core.stdc.time;

import app.common;

class ArrayHelper
{
	public static T array_shift(T)(ref T[] arr)
	{
		if(!arr.length)
		{
			return T.init;
		}
		if(arr.length == 1)
		{
			auto v = arr[0];
			arr = [];
			return v;
		}
		else
		{
			auto v = arr[0];
			arr = arr[1 .. $];
			return v;
		}
	}

	public static T array_pop(T)(ref T[] arr)
	{
		if(!arr.length)
		{
			return T.init;
		}
		if(arr.length == 1)
		{
			auto v = arr[$ - 1];
			arr = [];
			return v;
		}
		else
		{
			auto v = arr[$ - 1];
			arr = arr[0 .. $ - 1];
			return v;
		}
	}
}
