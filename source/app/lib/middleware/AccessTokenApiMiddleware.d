module app.lib.middleware.AccessTokenApiMiddleware;

import hunt.framework.application.Middleware;
import hunt.framework.http.Request;
import hunt.framework.http.Response;
import hunt.framework.http.JsonResponse;

import app.component.account.validation.AccessTokenApiMiddlewareValidation;
import app.component.account.validation.SignatureApiMiddlewareValidation;
import app.lib.middleware.BaseApiMiddleware;
import app.lib.controller.ApiBaseController;

import std.algorithm.searching;

class AccessTokenApiMiddleware : Middleware {

    public string[] whiteMCA = [];

    this(string[] args ...)
    {
        this.whiteMCA ~= args;
    }

    override string name() {
        return AccessTokenApiMiddleware.stringof;
    }

    override Response onProcess(Request request, Response response) {
        response.setHeader("content-type","application/json;charset=utf-8");
        if(!canFind(whiteMCA, request.getMCA()))
        {
            string[string] parames = request.all();
            auto signatureValidation = new SignatureApiMiddlewareValidation();
            signatureValidation.appid = "appid" in parames ? parames["appid"] : "";
            signatureValidation.timestamp = "timestamp" in parames ? parames["timestamp"] : "";
            signatureValidation.rnd = "rnd" in parames ? parames["rnd"] : "";
            signatureValidation.signature = "signature" in parames ? parames["signature"] : "";

            auto resultSignatureValidation = signatureValidation.valid();
            if (resultSignatureValidation.isValid() == false)
            {
                foreach (key, message; resultSignatureValidation.messages())
                {
                    response.setContent(ApiBaseController.errorMessage(5000, message).toString);
                    return response;
                }
            }

            auto tokenValidation = new AccessTokenApiMiddlewareValidation();
            tokenValidation.appid = "appid" in parames ? parames["appid"] : "";
            tokenValidation.openid = "openid" in parames ? parames["openid"] : "";
            tokenValidation.access_token = "access_token" in parames ? parames["access_token"] : "";

            auto resultTokenValidation = tokenValidation.valid();
            if (resultTokenValidation.isValid() == false)
            {
                foreach (key, message; resultTokenValidation.messages())
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
                response.setContent(ApiBaseController.errorMessage(5002, "signature invalid!").toString);
                return response;
            }
            if(!base.checkAccessToken(tokenValidation.openid, tokenValidation.access_token))
            {
                response.setContent(ApiBaseController.errorMessage(5002, "access_token invalid!").toString);
                return response;
            }
        }
        return null;
    }

}