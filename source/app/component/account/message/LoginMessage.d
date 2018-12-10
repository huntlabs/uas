module app.component.account.message.LoginMessage;

class LoginMessage
{
    string openid; //用户对应用的唯一标识
    //string unid; //用户通行证唯一标识
    string access_token;//用户访问令牌
    string refresh_token;//默认有效期30天
    int expires_in; //access_token过期时间(秒)
}