module app.component.account.validation.LoginValidation;

import hunt.validation;

class LoginValidation : Valid
{
    mixin MakeValid;

    string username;//账户名称

    @Length(8,32,"password length must be {{min}} and {{max}}")
    string password;
}