module app.component.account.model.User;

import hunt.entity;
@Table("user")
class User : Model
{
    mixin MakeModel;

    @AutoIncrement
    @PrimaryKey
    int	id;

    string unid;

    string mobile;

    string email;

    string username;

    string password;

    string salt;

    short status;

    int login_number;

    string last_login_ip;

    int last_login_time;

    string updated_ip;

    int updated;

    string created_ip;

    int created;
}