module app.component.test.controller.api.TestController;

import hunt.framework;
import app.lib.other.Sms;
import std.random;
class TestController : Controller
{
    mixin MakeController;
    this(){}

    @Action
    string testSms()
    {
        auto smsClass = new Sms();
        smsClass.setPhoneNumbers("18516693469");
        smsClass.setTemplateCode("SMS_116566597");
        auto code = uniform(100000, 999999);
        smsClass.setTemplateParam(["code":code.to!string]);
        return smsClass.sendSms();
    }
}