module app.component.account.helper.UserHelper;
import app.component.account.repository.UserRepository;
import app.component.account.repository.UserAppsRepository;
import app.component.account.repository.UserInfoRepository;
import app.component.account.model.UserApps;
import app.component.account.model.User;
import app.component.account.model.UserInfo;
import app.lib.other.Sms;
import std.uni;
import std.digest.sha;
import hunt.datetime;
import hunt.framework.utils.random;
import app.lib.functions;
import std.json;
import hunt.framework.application.Application;
import std.random;
import hunt.logging;

class UserHelper
{

    private UserRepository _userRep;
    private UserAppsRepository _userAppsRep;
    private UserInfoRepository _userInfoRep;

    enum MOBILE_ACCOUNT = "mobile";
    enum EMAIL_ACCOUNT = "email";
    enum USERNAME_ACCOUNT = "username";

    enum SMS_CODE_ID = "SMS_153332945"; //短信验证码（登录、注册、忘记密码等通用）
    enum SMS_CODE_EXPIRE_SECOND = 120; //短信验证码过期秒
    enum SMS_CODE_CACHE_PREFIX = "SMS_CODE_";

    enum STATUS_0 = 0; //关闭
    enum STATUS_1 = 1; //启用

    enum ANTI_BRUSH_CACHE_PREFIX = "REG_ANTI_BRUSH_";
    enum ANTI_BRUSH_NUM = 5;//密码、验证码登录可尝试登录次数
    enum ANTI_BRUSH_FROZEN_SECOND = 300; //密码、验证码登录次数过多后的冻结时间

    struct RegisterRet
    {
        string unid;
        string openid;
    }

    this()
    {
        _userRep = new UserRepository();
        _userAppsRep = new UserAppsRepository();
        _userInfoRep = new UserInfoRepository();
    }

    RegisterRet registerUsername(string username, string password, string appid = "")
    {
        User userModel = new User();
        userModel = this.registerBase(userModel);
        userModel.unid = this.generateUnid(username, userModel.salt);
        userModel.username = username;
        userModel.password = this.generatePassword(password, userModel.salt);
        return this.register(userModel, appid);
    }

    RegisterRet registerMobile(string mobile, string appid = "")
    {
        User userModel = new User();
        userModel = this.registerBase(userModel);
        userModel.unid = this.generateUnid(mobile, userModel.salt);
        userModel.username = mobile;
        userModel.mobile = mobile;
        userModel.password = "";
        userModel.login_number = 1;
        userModel.last_login_ip = userModel.created_ip;
        userModel.last_login_time = userModel.created;
        return this.register(userModel, appid);
    }

    bool sendSmsLoginCode(string mobile)
    {
        string cacheCode =  Application.getInstance().cache().get(SMS_CODE_CACHE_PREFIX ~ mobile);
        logInfo(cacheCode);
        if(cacheCode != "")
        {
            return true;
        }
        auto smsClass = new Sms();
        smsClass.setPhoneNumbers(mobile);
        smsClass.setTemplateCode(SMS_CODE_ID);
        auto code = uniform(100000, 999999).to!string;
        //smsClass.setTemplateParam(["code": code.to!string, "minute": SMS_CODE_EXPIRE.to!string]);
        smsClass.setTemplateParam(["code": code]);
        string result = smsClass.sendSms();
        try
        {
            JSONValue j= parseJSON(result);
            if(j["Code"].str != "OK")
            {
                return false;
            }
            Application.getInstance().cache().put(SMS_CODE_CACHE_PREFIX ~ mobile, code, SMS_CODE_EXPIRE_SECOND);
        }catch(Exception e)
        {
            logError(e);
            return false;
        }
        return true;
    }

    bool checkSmsLoginCode(string mobile, string code)
    {
        string cacheCode = Application.getInstance().cache().get(SMS_CODE_CACHE_PREFIX ~ mobile);
        logInfo(cacheCode ~ ":" ~ code);
        if(code == "" || cacheCode == "" || cacheCode != code)
        {
            return false;
        }
        Application.getInstance().cache().remove(SMS_CODE_CACHE_PREFIX ~ mobile);
        return true;
    }

    User findAccount(string accountType, string accountName)
    {
        if(!this.checkActioType(accountType))
        {
            return null;
        }
        return _userRep.findUser(accountType, accountName);
    }

    bool checkPassword(User user, string password)
    {
        if(!user || this.generatePassword(password, user.salt) != user.password)
        {
            return false;
        }
        return true;
    }

    bool checkStatus(User user)
    {
        if(!user || user.status != 1)
        {
            return false;
        }
        return true;
    }

    int antiBrushRetryNum(string username)
    {
        string cacheNum = Application.getInstance().cache().get(ANTI_BRUSH_CACHE_PREFIX ~ username);
        logInfo(cacheNum);
        int num = cacheNum == "" ? 0 : cacheNum.to!int;
        num++;
        int surplusNum = (ANTI_BRUSH_NUM - num);
        if(surplusNum < 0)
        {
            return 0;
        }
        Application.getInstance().cache().put(ANTI_BRUSH_CACHE_PREFIX ~ username, num.to!string, ANTI_BRUSH_FROZEN_SECOND);
        return surplusNum;
    }

    string findUnidByAccountName(string accountType, string accountName)
    {
        if(!this.checkActioType(accountType))
        {
            return "";
        }
        auto user = _userRep.findUser(accountType, accountName);
        return user ? user.unid : "";
    }

    string findOpenidByUnid(string appid, string unid)
    {
        auto user = _userAppsRep.findUserAppsByUnid(appid, unid);
        return user ? user.unid : "";
    }

    string findUnidByOpenid(string appid, string openid)
    {
        auto user = _userAppsRep.findUserAppsByOpenid(appid, openid);
        return user ? user.unid : "";
    }

    string findOpenidOrCreateByAppid(string appid, User user)
    {
        int curtime = cast(int)time();
        string ip = getClientIp();
        auto userApps = _userAppsRep.findUserAppsByUnid(appid, user.unid);
        if(!userApps)
        {
            UserApps userAppsModel = new UserApps();
            userAppsModel.appid = appid;
            userAppsModel.unid = user.unid;
            userAppsModel.openid = this.generateOpenid(appid, user.unid);
            userAppsModel.login_number = user.login_number == 0 ? 0 : 1;
            userAppsModel.last_login_ip = ip;
            userAppsModel.last_login_time = curtime;
            userAppsModel.updated_ip = ip;
            userAppsModel.updated = curtime;
            userAppsModel.created_ip = ip;
            userAppsModel.created = curtime;
            _userAppsRep.insertInto(userAppsModel);
            return userAppsModel.openid;
        }
        return userApps ? userApps.openid : "";
    }

    bool updatedLogin(string unid, string openid)
    {
        _userRep.updatedLogin(unid);
        _userAppsRep.updatedLogin(openid);
        return true;
    }

    UserInfo userInfo(string unid)
    {
        return _userInfoRep.findByUnid(unid);
    }

    private string generatePassword(string password, string salt)
    {
        string seed = password~"&"~salt;
        ubyte[] hash1 = sha1Of(seed);
        return toLower(toHexString(hash1));
    }

    private string generateUnid(string username, string salt)
    {
        string seed = "username="~username~"&and&salt="~salt;
        ubyte[] hash1 = sha1Of(seed);
        return toLower(toHexString(hash1));
    }

    private string generateOpenid(string appid, string unid)
    {
        string seed = "appid="~appid~"&and&unid="~unid;
        ubyte[] hash1 = sha1Of(seed);
        return toLower(toHexString(hash1));
    }

    private bool checkActioType(string accountType)
    {
        switch(accountType)
        {
            default:
            return false;
            case this.MOBILE_ACCOUNT:
            break;
            case EMAIL_ACCOUNT:
            break;
            case USERNAME_ACCOUNT:
            break;
        }
        return true;
    }

    private User registerBase(User userModel)
    {
        int curtime = cast(int)time();
        string salt = toLower(toHexString(getRandom(8)));
        string ip = getClientIp();
        userModel.salt = salt;
        userModel.status = STATUS_1;
        userModel.updated_ip = ip;
        userModel.updated = curtime;
        userModel.created_ip = ip;
        userModel.created = curtime;
        return userModel;
    }

    RegisterRet register(User userModel, string appid = "")
    {
        RegisterRet registerRet;
        string openid;
        try{
            _userRep.getEntityManager().getSession().getTransaction().begin();
            bool resultInsert = _userRep.insertInto(userModel);
            if(!resultInsert)
            {
                throw new Exception("error");
            }
            if(appid)
            {
                openid = this.findOpenidOrCreateByAppid(appid, userModel);
                if(openid == "")
                {
                    throw new Exception("error");
                }
            }
            _userRep.getEntityManager().getSession().getTransaction().commit();
        }catch(Exception e)
        {
            logError(e);
            _userRep.getEntityManager().getSession().getTransaction().rollback();
            return registerRet;
        }
        registerRet.unid = userModel.unid;
        registerRet.openid = openid;
        return registerRet;
    }
}
