module app.common.domainparsing;

import app.common;

import std.stdio;
import std.array;
import std.algorithm;

string[] formatDomain(string[] domains,string[] result)
{
	if(!domains)
	{
		//reverse(result);
		return result; 
	}
	result ~= domains.join(".");
	auto domain = ArrayHelper.array_shift!string(domains);
	return formatDomain(domains,result);
}

string[] formatURL(string url)
{
	auto domains = split(url,".");
	string[] result;
	return formatDomain(domains,result);
}
