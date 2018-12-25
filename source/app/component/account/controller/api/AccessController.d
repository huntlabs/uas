module app.component.account.controller.api.AccessController;

import hunt.framework;

import app.lib.controller.ApiBaseController;
import app.component.account.validation.LoginValidation;
import app.component.account.validation.SmsLoginValidation;
import app.component.account.validation.RegisterValidation;
import app.component.account.validation.CheckRegisterValidation;

import app.component.account.message.LoginMessage;
import app.component.appserver.repository.AppsRepository;
import std.json;
import app.component.account.helper.TokenHelper;
import app.component.account.helper.UserHelper;
import app.lib.middleware.SignatureApiMiddleware;
import std.algorithm.searching;

class AccessController : ApiBaseController
{
    mixin MakeController;
    this()
    {
        addMiddleware(new SignatureApiMiddleware([]));
    }

    @Action
    JSONValue checkRegister()
    {
        auto checkRegisterValidation = new CheckRegisterValidation();
        checkRegisterValidation.username = request.get("username");
        auto result = checkRegisterValidation.valid();
        if (result.isValid() == false)
        {
            foreach (key, message; result.messages())
            {
                return this.errorMessage(5000, message);
            }
        }
        auto userHelperClass = new UserHelper();
        auto userModel = userHelperClass.findAccount(userHelperClass.USERNAME_ACCOUNT, checkRegisterValidation.username);
        if(userModel)
        {
            return this.errorMessage(5005, "Account has been registered!");
        }
        return this.resultMessage();
    }

    @Action
    JSONValue register()
    {
        string appid = request.post("appid");
        auto registerValidation = new RegisterValidation();
        registerValidation.username = request.post("username");
        registerValidation.password = request.post("password");
        auto result = registerValidation.valid();
        if (result.isValid() == false)
        {
            foreach (key, message; result.messages())
            {
                return this.errorMessage(5000, message);
            }
        }
        //验证账户是否注册
        auto userHelperClass = new UserHelper();
        auto userModel = userHelperClass.findAccount(userHelperClass.USERNAME_ACCOUNT, registerValidation.username);
        if (userModel)
        {
            return this.errorMessage(5005, "Account has been registered!");
        }
        //注册账户
        auto res = userHelperClass.registerUsername(registerValidation.username, registerValidation.password, appid);
        if (res.unid == "")
        {
            return this.errorMessage(-1, "The system is busy. Please try again later!");
        }
        return this.resultMessage();
    }

    @Action
    JSONValue sendCode()
    {
        string mobile = request.post("mobile", "");
        if(mobile == "")
        {
            return this.errorMessage(5000, "mobile matching failure!");
        }
        auto userHelperClass = new UserHelper();
        userHelperClass.sendSmsLoginCode(mobile);
        return this.resultMessage();
    }
    @Action
    JSONValue smsLogin()
    {
        string appid = request.post("appid");
        auto smsLoginValidation = new SmsLoginValidation();
        smsLoginValidation.mobile = request.post("mobile");
        smsLoginValidation.code = request.post("code");
        auto result = smsLoginValidation.valid();
        if (result.isValid() == false)
        {
            foreach (key, message; result.messages())
            {
                return this.errorMessage(5000, message);
            }
        }

        auto userHelperClass = new UserHelper();
        //校验验证码是否正确
        if (!userHelperClass.checkSmsLoginCode(smsLoginValidation.mobile, smsLoginValidation.code))
        {
            auto num = userHelperClass.antiBrushRetryNum(smsLoginValidation.mobile);
            if(num == 0)
            {
                return this.errorMessage(5003, "There are too many login errors. Please try again in "~(userHelperClass.ANTI_BRUSH_FROZEN_SECOND/60).to!string~" minutes!");
            }
            return this.errorMessage(5003, "code invalid!");
        }
        //验证账户是否注册
        auto userModel = userHelperClass.findAccount(userHelperClass.MOBILE_ACCOUNT, smsLoginValidation.mobile);
        string unid,openid;
        if(!userModel)
        {
            auto ret = userHelperClass.registerMobile(smsLoginValidation.mobile, appid);
            //手机账户首次注册失败
            if(ret.unid == "")
            {
                return this.errorMessage(-1, "1The system is busy. Please try again later!");
            }
            unid = ret.unid;
            openid = ret.openid;
        }else
        {
            if (!userHelperClass.checkStatus(userModel))
            {
                return this.errorMessage(5004, "Account Closed!");
            }
            unid = userModel.unid;
            //验证账户是否与平台相关联，如果无关联则创建关联信息并生成openid
            openid = userHelperClass.findOpenidOrCreateByAppid(appid, userModel);
        }
        logInfo(unid ~ " ~ " ~ openid);
        //二次验证是否注册成功
        if(unid == "" || openid == "")
        {
            return this.errorMessage(-1, "2The system is busy. Please try again later!");
        }
        //更新登陆信息
        auto appsInfo = (new AppsRepository()).findByAppid(appid);
        auto tokenClass = new TokenHelper();
        auto loginMessage = new LoginMessage();
        try
        {
            //根据应用配置的过期时间动态调整token的过期时间
            tokenClass.setAccessTokenExpiresIn(appsInfo.access_token_expires_in);
            tokenClass.setRefreshTokenExpiresIn(appsInfo.refresh_token_expires_in);
            //生成access_token
            string accessToken = tokenClass.saveAccessToken(openid);
            //生成refresh_token
            string refreshToken = tokenClass.saveRefreshToken(openid);
            loginMessage.openid = openid;
            loginMessage.access_token = accessToken;
            loginMessage.refresh_token = refreshToken;
            loginMessage.expires_in = tokenClass.access_token_expires_in;
        }catch(Exception e)
        {
            logInfo(e);
            return this.errorMessage(-1, "The system is busy. Please try again later!");
        }
        //构造返回数据
        return this.resultMessage(loginMessage);
    }

    @Action
    JSONValue login()
    {
        string appid = request.post("appid");
        auto loginValidation = new LoginValidation();
        loginValidation.username = request.post("username");
        loginValidation.password = request.post("password");
        auto result = loginValidation.valid();
        if (result.isValid() == false)
        {
            foreach (key, message; result.messages())
            {
                return this.errorMessage(5000, message);
            }
        }
        auto userHelperClass = new UserHelper();
        //验证账户
        auto userModel = userHelperClass.findAccount(userHelperClass.USERNAME_ACCOUNT, loginValidation.username);
        if (userHelperClass.checkPassword(userModel, loginValidation.password))
        {
            auto num = userHelperClass.antiBrushRetryNum(loginValidation.username);
            if(num == 0)
            {
                return this.errorMessage(5003, "There are too many login errors. Please try again in "~(userHelperClass.ANTI_BRUSH_FROZEN_SECOND/60).to!string~" minutes!");
            }
            return this.errorMessage(5003, "Username or password error, You can try again "~num.to!string~" times!");
        }
        if (!userHelperClass.checkStatus(userModel))
        {
            return this.errorMessage(5004, "Account Closed!");
        }
        //获取账户unid
        string unid = userModel.unid;
        //获取账户openid,首次登陆app创建关系
        string openid = userHelperClass.findOpenidOrCreateByAppid(appid, userModel);

        auto tokenClass = new TokenHelper();
        //更新登陆信息
        auto loginMessage = new LoginMessage();
        try
        {
            userHelperClass.updatedLogin(unid, openid);
            //生成access_token
            string accessToken = tokenClass.saveAccessToken(openid);
            //生成refresh_token
            string refreshToken = tokenClass.saveRefreshToken(openid);
            loginMessage.openid = openid;
            loginMessage.access_token = accessToken;
            loginMessage.refresh_token = refreshToken;
            loginMessage.expires_in = tokenClass.access_token_expires_in;
        }catch(Exception e)
        {
            logInfo(e);
            return this.errorMessage(-1, "The system is busy. Please try again later!");
        }
        //构造返回数据
        return this.resultMessage(loginMessage);
    }

    @Action
    JSONValue refreshAccessToken()
    {
        string appid = request.post("appid");
        string refreshToken = request.post("refresh_token");
        string openid = request.post("openid");
        auto tokenClass = new TokenHelper();
        auto loginMessage = new LoginMessage();
        try
        {
            if (!tokenClass.checkRefreshToken(openid, refreshToken))
            {
                return this.errorMessage(5008, "refresh_token invalid!");
            }
            string newAccessToken = tokenClass.refreshAccessToken(openid, refreshToken);
            if (newAccessToken == "")
            {
                return this.errorMessage(5008, "refresh_token invalid!");
            }
            loginMessage.openid = openid;
            loginMessage.access_token = newAccessToken;
            loginMessage.refresh_token = refreshToken;
            loginMessage.expires_in = tokenClass.access_token_expires_in;
        }catch(Exception e)
        {
            return this.errorMessage(-1, "The system is busy. Please try again later!");
        }
        return this.resultMessage(loginMessage);
    }

    @Action
    JSONValue logout()
    {
        string openid = request.post("openid", "");
        string accessToken = request.post("access_token", "");
        auto tokenHelperClass = new TokenHelper();
        if(openid != "" && accessToken != "" && tokenHelperClass.checkAccessToken(openid, accessToken))
        {
            tokenHelperClass.deleteToken(openid);
        }
        return this.resultMessage();
    }
}