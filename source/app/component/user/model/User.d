module app.component.user.model.User;

import hunt.entity;
@Table("user")
class User
{
    mixin MakeEntity;
    
    @AutoIncrement
    @PrimaryKey
    int id;

    string username;

    string password;

    string salt;

    string email;

    string mobile;

    int created;

    int updated;
}
