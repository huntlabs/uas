module app.component.account.repository.UserAppsRepository;

import hunt.entity;
import app.component.account.model.UserApps;
import hunt.datetime;
import app.lib.functions;

class UserAppsRepository : EntityRepository!(UserApps, int)
{
    private EntityManager _entityManager;

    this(EntityManager manager = null)
    {
        _entityManager = manager is null ? createEntityManager() : manager;
        super(_entityManager);
    }

    UserApps findUserAppsByUnid(string appid, string unid)
    {
        auto query = this.getEntityManager.createQuery!(UserApps)(" select * from UserApps a where a.appid=:appid and a.unid=:unid;");
        query.setParameter("appid", appid);
        query.setParameter("unid", unid);
        return query.getSingleResult();
    }

    UserApps findUserAppsByOpenid(string appid, string openid)
    {
        auto query = this.getEntityManager.createQuery!(UserApps)(" select * from UserApps a where a.appid=:appid and a.openid=:openid;");
        query.setParameter("appid", appid);
        query.setParameter("openid", openid);
        return query.getSingleResult();
    }

    int updatedLogin(string openid)
    {
        int curtime = cast(int)time();
        string ip = getClientIp();
        auto update = this.getEntityManager.createQuery!(UserApps)(" update UserApps u set u.login_number = login_number+1, u.last_login_ip = :ip, u.last_login_time = :curtime, u.updated_ip = :ip, u.updated = :curtime  where u.openid = :openid limit 1 ");
        update.setParameter("openid", openid);
        update.setParameter("ip", ip);
        update.setParameter("curtime", curtime);
        return update.exec();
    }

    bool insertInto(UserApps userApps)
    {
        string fieldkey = ""~Field.appid~","~ Field.unid~","~ Field.openid~","~ Field.login_number~","~ Field.last_login_ip~","~ Field.last_login_time~ ","~ Field.updated_ip~","~ Field.updated~","~ Field.created_ip~","~ Field.created ~"";
        string values = "'"~userApps.appid~"','"~ userApps.unid ~"','"~ userApps.openid ~"','"~ userApps.login_number.to!string~"','"~ userApps.last_login_ip~"','"~ userApps.last_login_time.to!string~ "','"~ userApps.updated_ip~"','"~ userApps.updated.to!string~"','"~ userApps.created_ip~"','"~ userApps.created.to!string ~"'";
        auto ret = this.getEntityManager().getSession().getTransaction().execute("insert into "~Field._tableName~" ("~fieldkey~") VALUES ("~values~")");
        if(ret != 1)
        {
            return false;
        }
        return true;
    }

}