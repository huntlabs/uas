module app.component.test.controller.api.TestController;

import hunt.framework;
import app.lib.other.Sms;
import std.random;
import hunt.framework.utils.random;
import std.digest.sha;

class TestController : Controller
{
    mixin MakeController;
    this(){}

    @Action
    string testSms()
    {
        return toLower(toHexString(getRandom(16)))[0 .. 8];
    }
}