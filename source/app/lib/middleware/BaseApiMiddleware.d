module app.lib.middleware.BaseApiMiddleware;

import app.component.appserver.repository.AppsRepository;
import app.lib.signature;
import app.component.account.helper.TokenHelper;
import hunt.logging;
import std.uni;

class BaseApiMiddleware
{

    bool checkAppidAccess(string appid)
    {
        return true;
    }

    bool checkRequestSignature(string[string] parames)
    {
        //获取appid相关信息 验证签名
        auto appInfo = (new AppsRepository).findByAppid(parames["appid"]);
        logInfo(appInfo);
        if(appInfo && toLower(parames["signature"]) == toLower(signature1(parames, appInfo.appsecret)))
        {
            return true;
        }
        appInfo && logError(parames["signature"]~" : "~signature1(parames, appInfo.appsecret));
        return false;
    }

    bool checkAccessToken(string openid, string accessToken)
    {
        return (new TokenHelper).checkAccessToken(openid, accessToken);
    }

}