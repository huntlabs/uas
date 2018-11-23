module app.component.user.repository.UserRepository;

import app.component.user.model.User;
import hunt.logging;
import hunt.entity;

class UserRepository : EntityRepository!(User, int)
{

    User findByName(string name)
    {      
        User[] users = findAll(new Condition("%s = '%s'", Field.username, name));
        // logInfo(users.length);
        if(users.length > 0)
            return users[0];
        
        return null;	
    }

    User findByEmail(string email)
    {
       
        User[] users = findAll(new Condition("%s = '%s'", Field.email, email));
        if(users.length > 0)
            return users[0];

        return null;
    }
}
