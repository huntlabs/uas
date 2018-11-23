module app.component.user.repository.ThirdPartyRepository;

import app.component.user.model.ThirdParty;
import hunt.logging;
import hunt.entity;

class ThirdPartyRepository : EntityRepository!(ThirdParty, int)
{
    ThirdParty findByUniqId(string id)
    {
        auto result = findAll(new Condition("%s = %s", Field.uniqid, id));
        if(result.length > 0){
            return result[0];
        }else{
            return null;
        }
    }
}