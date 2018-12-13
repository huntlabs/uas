module app.lib.controller.FrontBaseController;

import hunt.framework;
import std.json;

class FrontBaseController : Controller
{
    this()
    {
        //_app = _codeConf.build!(AppConfig, "code")();
        //addConfig("code", _codeConf);
    }

    override bool before()
    {
        return true;
    }

    override bool after()
    {
        return true;
    }

}
