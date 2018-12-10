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

    int updated;

    int created;
}