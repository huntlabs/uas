module app.lib.functions;

string getClientIp()
{
    import hunt.framework.http.Request;
    return request.clientAddress().toAddrString();
}