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

}