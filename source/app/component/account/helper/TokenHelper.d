module app.component.account.helper.TokenHelper;

import hunt.framework;
import hunt.framework.utils.random;
import hunt.datetime;
import hunt.util.serialize;
import hunt.cache.ucache;
import hunt.framework.application.Application;
import std.digest.sha;
import std.uni;
class TokenHelper
{
    const REFRESH_TOKEN_TYPE = "api_refresh_token";
    const ACCESS_TOKEN_TYPE = "api_access_token";
    int access_token_expires_in = 86400; //access_token过期时间(秒)
    int refresh_token_expires_in = 2592000; //refresh_token过期时间(秒)

    this()
    {

    }

    void setAccessTokenExpiresIn(int second)
    {
        if(second > 0)
        {
            this.access_token_expires_in = second;
        }
    }

    void setRefreshTokenExpiresIn(int second)
    {
        if(second > 0)
        {
            this.refresh_token_expires_in = second;
        }
    }

    string generateToken(string openid)
    {
        string seed = toHexString(getRandom(16))~"&"~openid~"&"~time().to!string;
        ubyte[] hash256 = sha256Of(seed);
        return toLower(toHexString(hash256));
    }

    string saveRefreshToken(string openid)
    {
        string token = this.generateToken(openid);
        logInfo("put "~openid~" refresh:"~token);
        Application.getInstance().cache().put(this.generateCacheKey(REFRESH_TOKEN_TYPE, openid), token, this.refresh_token_expires_in);
        return token;
    }

    string saveAccessToken(string openid)
    {
        string token = this.generateToken(openid);
        logInfo("put "~openid~" access:"~token);
        Application.getInstance().cache().put(this.generateCacheKey(ACCESS_TOKEN_TYPE, openid), token, this.access_token_expires_in);
        return token;
    }

    string generateCacheKey(string tokeType, string openid)
    {
        return tokeType ~"_"~ openid;
    }

    bool checkRefreshToken(string openid, string token)
    {
        string cacheToken = Application.getInstance().cache().get(this.generateCacheKey(REFRESH_TOKEN_TYPE, openid));
        if(cacheToken != "" && token == cacheToken)
        {
            return true;
        }
        return false;
    }

    bool checkAccessToken(string openid, string token)
    {
        string cacheToken = Application.getInstance().cache().get(this.generateCacheKey(ACCESS_TOKEN_TYPE, openid));
        logInfo(token~" : "~cacheToken);
        if(token != "" && cacheToken != "" && token == cacheToken)
        {
            return true;
        }
        return false;
    }

    string refreshAccessToken(string openid, string refreshToken)
    {
        string token = this.saveAccessToken(openid); //生成新的access_token
        this.refreshTokenRenewal(openid, refreshToken); //refresh_token自动续期防止过期
        return token;
    }

    bool deleteToken(string openid)
    {
        Application.getInstance().cache().remove(this.generateCacheKey(ACCESS_TOKEN_TYPE, openid));
        Application.getInstance().cache().remove(this.generateCacheKey(REFRESH_TOKEN_TYPE, openid));
        return true;
    }

    private bool refreshTokenRenewal(string openid, string refreshToken)
    {
        Application.getInstance().cache().put(this.generateCacheKey(REFRESH_TOKEN_TYPE, openid), refreshToken, this.refresh_token_expires_in);
        return true;
    }

    /*
        unid_api_access_token:[
            appid_token1:openid,
            token2:openid,
            token3:openid
        ]
        unid_api_refresh_token:[
            token1,token2,token3
        ]

    */

}
