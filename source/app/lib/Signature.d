module app.lib.Signature;

import std.digest.md;
import std.digest.sha;
import std.algorithm.sorting;

/*
1、将参数键名正序排列 ["aba" : "test1", "abb" : "test2", "abc" : "test3"]
2、拼接参数 abc=test1&abb=test2&abc=test3
3、拼接密钥 secret ~ abc=test1&abb=test2&abc=test3 ~ secret
4、sha256加密
*/
string signature1(string[string] parameters, string secret)
{
    string str = "";
    string[] arr;
    foreach(key,val; parameters)
    {
        if(key != "signature")
        {
            arr ~= key;
        }
    }
    arr.sort();
    foreach(index,val; arr)
    {
        if(index > 0)
        {
            str ~= "&";
        }
        str ~= val ~ "=" ~ parameters[val];
    }
    ubyte[] hash = md5Of(secret ~ str ~ secret);
    return toHexString(hash);
}