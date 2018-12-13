module app.component.account.validation.AccessTokenApiMiddlewareValidation;

import hunt.validation;

class AccessTokenApiMiddlewareValidation : Valid
{
    mixin MakeValid;

    @Length(16,16,"appid invalid")
    string appid;

    @Length(64,64,"access_token invalid")
    string access_token;

    @Length(32,32,"openid invalid")
    string openid;
}