module app.lib.middleware.SignatureApiMiddleware;

import hunt.framework.application.Middleware;
import hunt.framework.http.Request;
import hunt.framework.http.Response;
import hunt.framework.http.JsonResponse;

import  app.component.account.validation.SignatureApiMiddlewareValidation;
import app.lib.middleware.BaseApiMiddleware;
import app.lib.controller.ApiBaseController;
import std.algorithm.searching;

class SignatureApiMiddleware : Middleware {

    public string[] whiteMCA = [];

    this(string[] args ...)
    {
        this.whiteMCA ~= args;
    }

    override string name() {
        return SignatureApiMiddleware.stringof;
    }

    override Response onProcess(Request request, Response response) {
        response.setHeader("content-type","application/json;charset=utf-8");
        if(!canFind(whiteMCA, request.getMCA()))
        {
            string[string] parames = request.all();
            auto validation = new SignatureApiMiddlewareValidation();
            validation.appid = "appid" in parames ? parames["appid"] : "";
            validation.timestamp = "timestamp" in parames ? parames["timestamp"] : "";
            validation.rnd = "rnd" in parames ? parames["rnd"] : "";
            validation.signature = "signature" in parames ? parames["signature"] : "";

            auto resultValidation = validation.valid();
            if (resultValidation.isValid() == false)
            {
                foreach (key, message; resultValidation.messages())
                {
                    response.setContent(ApiBaseController.errorMessage(5000, message).toString);
                    return response;
                }
            }
            auto base = new BaseApiMiddleware();
            if(!base.checkAppidAccess(parames["appid"]))
            {
                response.setContent(ApiBaseController.errorMessage(5001, "appid Unauthorized Access!").toString);
                return response;
            }
            if(!base.checkRequestSignature(parames))
            {
                response.setContent(ApiBaseController.errorMessage(5002, "signature error!").toString);
                return response;
            }
        }
        return null;
    }

}