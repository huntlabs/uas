module app.component.account.model.App;

import hunt.entity;
@Table("app")
class App
{
    mixin MakeEntity;
    
    @AutoIncrement
    @PrimaryKey
    int id;

    string secret;

    int created;
}