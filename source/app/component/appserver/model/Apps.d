module app.component.appserver.model.Apps;

import hunt.entity;
@Table("apps")
class Apps : Model
{
    mixin MakeModel;

    @AutoIncrement
    @PrimaryKey
    int id;

    string appid;

    string title;

    string profile;

    string appsecret;

    int access_token_expires_in;

    int refresh_token_expires_in;

    int updated;

    int created;
}