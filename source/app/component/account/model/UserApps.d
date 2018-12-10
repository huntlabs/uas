module app.component.account.model.UserApps;

import hunt.entity;
@Table("user_apps")
class UserApps : Model
{
    mixin MakeModel;

    @AutoIncrement
    @PrimaryKey
    int	id;

    string appid;

    string unid;

    string openid;

    int login_number;

    string last_login_ip;

    int last_login_time;

    string updated_ip;

    int updated;

    string created_ip;

    int created;
}