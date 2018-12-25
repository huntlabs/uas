module app.component.account.validation.SmsLoginValidation;

import hunt.validation;

class SmsLoginValidation : Valid
{
    mixin MakeValid;

    @Length(11, 11,"mobile invalid!")
    string mobile;//手机号码

    @Length(6, 6,"code invalid!")
    string code;
}