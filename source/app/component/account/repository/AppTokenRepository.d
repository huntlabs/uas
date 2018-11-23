module app.component.account.repository.AppTokenRepository;
import app.component.account.model.AppToken;
import hunt.logging;
import hunt.entity;

class AppTokenRepository : EntityRepository!(AppToken, int)
{
    AppToken findByAppId(int appid)
    {
        auto find = find(new Condition("%s = %s", Field.appid, appid));
        if(find){
            return find;
        }else{
            return null;
        }
    }
}