module app.component.account.validation.SignatureApiMiddlewareValidation;

import hunt.validation;

class SignatureApiMiddlewareValidation : Valid
{
    mixin MakeValid;

    @Length(16,16,"appid invalid")
    string appid;

    @Length(10,10,"timestamp invalid")
    string timestamp; //当前时间戳

    @Length(8,8,"rnd invalid")
    string rnd; //随机数a-z|A-Z|0-9

    @Length(32,32,"signature invalid")
    string signature; //签名
}