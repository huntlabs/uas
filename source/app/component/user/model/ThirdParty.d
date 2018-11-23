module app.component.user.model.ThirdParty;

import hunt.entity;
@Table("user_thirdparty")
class ThirdParty
{
    mixin MakeEntity;
    
    @AutoIncrement
    @PrimaryKey
    int id;

    int uid;

    string uniqid;

    string detail;

    string type;
}