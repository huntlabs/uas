module app.component.account.helper.UserHelper;
import app.component.account.repository.UserRepository;
import app.component.account.repository.UserAppsRepository;
import app.component.account.model.UserApps;
import app.component.account.model.User;
import std.uni;
import std.digest.sha;
import hunt.datetime;
import hunt.framework.utils.random;
import app.lib.functions;

class UserHelper
{

    private UserRepository _userRep;
    private UserAppsRepository _userAppsRep;

    enum MOBILE_ACCOUNT = "mobile";
    enum EMAIL_ACCOUNT = "email";
    enum USERNAME_ACCOUNT = "username";

    enum STATUS_0 = 0; //关闭
    enum STATUS_1 = 1; //启用
    this()
    {
        _userRep = new UserRepository();
        _userAppsRep = new UserAppsRepository();
    }

    bool registerUsername(string username, string password, string appid = "")
    {
        int curtime = cast(int)time();
        string ip = getClientIp();
        User userModel = new User();
        string salt = toLower(toHexString(getRandom(8)));
        userModel.unid = this.generateUnid(username, salt);
        userModel.username = username;
        userModel.password = this.generatePassword(password, salt);
        userModel.salt = salt;
        userModel.status = STATUS_1;
        userModel.updated_ip = ip;
        userModel.updated = curtime;
        userModel.created_ip = ip;
        userModel.created = curtime;
        try{
            bool resultInsert = _userRep.insertInto(userModel);
            if(!resultInsert)
            {
                return false;
            }
            if(appid)
            {
                this.findOpenidOrCreateByAppid(appid, userModel.unid);
            }
        }catch(Exception e)
        {
            return false;
        }
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
        return user ? user.openid : "";
    }

    string findOpenidOrCreateByAppid(string appid, string unid)
    {
        int curtime = cast(int)time();
        string ip = getClientIp();
        auto userApps = _userAppsRep.findUserAppsByUnid(appid, unid);
        if(!userApps)
        {
            UserApps userAppsModel = new UserApps();
            userAppsModel.appid = appid;
            userAppsModel.unid = unid;
            userAppsModel.openid = this.generateOpenid(appid, unid);
            userAppsModel.login_number = 0;
            userAppsModel.last_login_ip = ip;
            userAppsModel.last_login_time = curtime;
            userAppsModel.updated_ip = ip;
            userAppsModel.updated = curtime;
            userAppsModel.created_ip = ip;
            userAppsModel.created = curtime;
            _userAppsRep.save(userAppsModel);
        }
        return userApps ? userApps.openid : "";
    }

    bool updatedLogin(string unid, string openid)
    {
        _userRep.updatedLogin(unid);
        _userAppsRep.updatedLogin(openid);
        return true;
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

}
