module app.lib.other.Sms;
import std.array;
import hunt.datetime;
import hunt.framework.utils.random;
import std.uri;
import std.net.curl;
import std.digest.sha;
import std.json;
import std.stdio;
import std.algorithm.sorting;
import std.base64;
import std.digest.hmac;
import std.string : representation;
import hunt.framework.application.AppConfig;

class Sms
{
    string _sendApi = "https://dysmsapi.aliyuncs.com";
    string _accessKeyId;
    string _accessSecret;
    string _signName;
    string[string] parameters;
    this()
    {
        auto conf = Config.config("hunt");
        _accessKeyId = conf.aliyun.sms.accessKeyId.value;
        _accessSecret = conf.aliyun.sms.accessSecret.value;
        _signName = conf.aliyun.sms.signName.value;
        if(_accessKeyId == "")
        {
            throw new Exception("Missing `accessKeyId` parameters, Please Write to the config/application.conf(parameter:aliyun.sms.accessKeyId=xxxx)!");
        }
        if(_accessSecret == "")
        {
            throw new Exception("Missing `accessSecret` parameters, Please Write to the config/application.conf(parameter:aliyun.sms.accessSecret=xxxx)!");
        }
        if(_signName == "")
        {
            throw new Exception("Missing `signName` parameters, Please Write to the config/application.conf(parameter:aliyun.sms.signName=xxxx)!");
        }
    }

    private void setPublicParameters()
    {
        this.parameters["Format"] = "JSON";
        this.parameters["Version"] = "2017-05-25";
        this.parameters["AccessKeyId"] = _accessKeyId;
        this.parameters["SignatureMethod"] = "HMAC-SHA1";
        this.parameters["Timestamp"] = date("Y-m-dTH:i:sZ", time() - 8*3600);
        this.parameters["SignatureVersion"] = "1.0";
        this.parameters["SignatureNonce"] = toHexString(getRandom(16));
        this.parameters["RegionId"] = "cn-hangzhou";
    }

    void setPhoneNumbers(string phoneNumber)
    {
        if(phoneNumber != "")
        {
            this.parameters["PhoneNumbers"] = phoneNumber;
        }
    }

    void setPhoneNumbers(string[] phoneNumbers)
    {
        if(phoneNumbers.length > 0)
        {
            this.parameters["PhoneNumbers"] = join(phoneNumbers, ",");
        }
    }

    void setTemplateCode(string templateCode)
    {
        this.parameters["TemplateCode"] = templateCode;
    }

    private void setSignName(string signName = "")
    {
        this.parameters["SignName"] = signName != "" ? signName : _signName;
    }

    void setTemplateParam(string[string] templateParam)
    {
        if(templateParam.length > 0)
        {
            this.parameters["TemplateParam"] = JSONValue(templateParam).toString;
        }
    }

    void setOutId(string outId = "")
    {
        if(outId != "")
        {
            this.parameters["OutId"] = outId;
        }
    }

    void setSmsUpExtendCode(string smsUpExtendCode = "")
    {
        if(smsUpExtendCode != "")
        {
            this.parameters["SmsUpExtendCode"] = smsUpExtendCode;
        }
    }

    string sendSms()
    {
        this.setPublicParameters();
        this.setSignName();
        if("PhoneNumbers" !in this.parameters || this.parameters["PhoneNumbers"] == "")
        {
            throw new Exception("Missing `PhoneNumbers` parameters, Call the setPhoneNumbers() function!");
        }
        if("TemplateCode" !in this.parameters || this.parameters["TemplateCode"] == "")
        {
            throw new Exception("Missing `TemplateCode` parameters, Call the setTemplateCode() function!");
        }
        if("SignName" !in this.parameters || this.parameters["SignName"] == "")
        {
            throw new Exception("Missing `PhoneNumbers` parameters, Call the setSignName() function!");
        }
        this.parameters["Action"] = "SendSms";
        this.parameters["Signature"] = generateSignature("POST", this.parameters);
        string result;
        string postText;
        int index = 0;
        foreach(key, val; this.parameters)
        {
            if(index > 0)
            {
                postText ~= "&";
            }
            postText ~= key ~ "=" ~ val;
            index++;
        }
        auto http = HTTP(_sendApi);
        auto w = appender!string;
        http.setPostData(postText, "application/x-www-form-urlencoded");
        http.onReceive = (ubyte[] data) { w.put(cast(string)data); return data.length; };
        http.perform();
        result = w.data;
        return result;
    }

    private string generateSignature(string HttpMethod, string[string] parameters)
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
            str ~= encodeComponent(val) ~ "=" ~ encodeComponent(parameters[val]);
        }
        str = HttpMethod ~ "&" ~ "%2F" ~ "&" ~ encodeComponent(str).replace("+", "%20").replace("/", "%2F").replace("*", "%2A").replace("%7E", "~");
        writeln(str);
        string secret = _accessSecret~"&";
        auto hmac = HMAC!SHA1(secret.representation);
        auto digest = hmac.put(str.representation).finish();
        string signature = encodeComponent(Base64.encode(digest));
        return signature;
    }
}