module app.component.account.model.AppToken;

import hunt.entity;
@Table("app_token")
class AppToken
{
    mixin MakeEntity;
    
    @AutoIncrement
    @PrimaryKey
    int id;

    int appid;

    string token;

    string refresh_token;

    int created;

    int updated;

    int expires;
}