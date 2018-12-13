module app.component.account.validation.ApiMiddlewareValidation;

import hunt.validation;

class ApiMiddlewareValidation : Valid
{
    mixin MakeValid;

    string appid;

    @Length(10,10,"timestamp length must be 10")
    string timestamp; //当前时间戳

    @Length(8,8,"rnd length must be {{min}}")
    string rnd; //随机数a-z|A-Z|0-9

    @Length(40,40,"signature error")
    string signature; //签名
}