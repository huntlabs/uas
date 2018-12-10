module app.component.account.validation.RegisterValidation;

import hunt.validation;

class RegisterValidation : Valid
{
    mixin MakeValid;

    @Length(6,40,"username length must be {{min}} and {{max}}")
    string username;//账户名称

    @Length(8,32,"password length must be {{min}} and {{max}}")
    string password;
}