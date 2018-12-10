module app.component.account.validation.CheckRegisterValidation;

import hunt.validation;

class CheckRegisterValidation : Valid
{
    mixin MakeValid;

    @Length(6,40,"username length must be {{min}} and {{max}}")
    string username;//账户名称
}