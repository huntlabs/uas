module app.component.account.controller.api.PublicController;

import hunt.framework;

import app.lib.controller.ApiBaseController;
import app.lib.middleware.AccessTokenApiMiddleware;
import app.component.account.helper.UserHelper;
import app.component.account.message.UserInfoMessage;

class PublicController : ApiBaseController
{
    mixin MakeController;
    this()
    {
        addMiddleware(new AccessTokenApiMiddleware([]));
    }


    @Action
    JSONValue checkAccessToken()
    {
        return this.resultMessage();
    }

    @Action
    JSONValue userInfo()
    {
        string appid = request.get("appid", "");
        string openid = request.get("openid", "");
        auto userHelperClass = new UserHelper();
        auto userInfo = userHelperClass.userInfo(appid, openid);
        auto resultMessage = new UserInfoMessage();
        if(userInfo)
        {
            resultMessage.openid = openid;
            resultMessage.unid = userInfo.unid;
            resultMessage.nickname = userInfo.nickname;
            resultMessage.gender = userInfo.gender;
            resultMessage.birthday = userInfo.birthday;
            resultMessage.avatar = userInfo.avatar;
            resultMessage.country = userInfo.country;
            resultMessage.province = userInfo.province;
            resultMessage.city = userInfo.city;
        }
        return this.resultMessage(resultMessage);
    }
}