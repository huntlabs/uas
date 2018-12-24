module app.component.test.controller.api.TestController;

import hunt.framework;
import app.lib.other.Sms;

class TestController : Controller
{
    mixin MakeController;
    this(){}

    @Action
    string test()
    {
        auto smsClass = new Sms();
        smsClass.setPhoneNumbers("18516693469");
        smsClass.setTemplateCode("SMS_116566597");
        smsClass.setTemplateParam(["code":"test"]);
        return smsClass.sendSms();
    }
}