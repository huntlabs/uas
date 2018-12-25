module app.component.account.validation.CheckRegister;

import hunt.validation;

class CheckRegister : Valid
{
    mixin MakeValid;

    string appid;

    string username;//账户名称

    @Length(10,10,"timestamp length must be 10")
    string timestamp; //当前时间戳

    @Length(8,8,"rnd length must be {{min}} and {{max}}")
    string rnd; //随机数a-z|A-Z|0-9

    @Length(40,40,"signature invalid")
    string signature; //签名
}