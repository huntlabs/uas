module app.component.account.model.UserInfo;

import hunt.entity;
@Table("user_info")
class UserInfo : Model
{
    mixin MakeModel;

    @AutoIncrement
    @PrimaryKey
    int	id;

    string unid;

    string realname;

    string nickname;

    short gender;

    string birthday;

    string avatar;

    string point;

    string money;

    string level;

    string country;

    string province;

    string city;

    string area;

    int updated;

    int created;
}