module app.component.account.controller.api.PublicController;

import hunt.framework;

import app.lib.controller.ApiBaseController;
import app.lib.middleware.AccessTokenApiMiddleware;
import app.component.account.helper.TokenHelper;

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
    JSONValue logout()
    {
        string openid = request.post("openid");
        auto tokenHelperClass = new TokenHelper();
        tokenHelperClass.deleteToken(openid);
        return this.resultMessage();
    }
}