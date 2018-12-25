module app.component.account.repository.UserRepository;

import hunt.entity;
import app.component.account.model.User;
import hunt.datetime;
import app.lib.functions;
import hunt.logging;
import hunt.util.serialize;

class UserRepository : EntityRepository!(User, int)
{
    private EntityManager _entityManager;

    this(EntityManager manager = null)
    {
        _entityManager = manager is null ? createEntityManager() : manager;
        super(_entityManager);
    }

    bool insertInto(User user)
    {
        string fieldkey = ""~Field.unid~","~ Field.mobile~","~ Field.email~","~ Field.username~","~ Field.password~","~ Field.salt~","~ Field.status~","~ Field.login_number~","~ Field.last_login_ip~","~ Field.last_login_time~ ","~ Field.updated_ip~","~ Field.updated~","~ Field.created_ip~","~ Field.created ~"";
        string values = "'"~user.unid~"',"~ (user.mobile == "" ? "null" : "'"~user.mobile~"'") ~","~ (user.email == "" ? "null" : "'"~user.email~"'") ~",'"~ user.username~"','"~ user.password~"','"~ user.salt~"','"~ user.status.to!string~"','"~ user.login_number.to!string~"','"~ user.last_login_ip~"','"~ user.last_login_time.to!string~ "','"~ user.updated_ip~"','"~ user.updated.to!string~"','"~ user.created_ip~"','"~ user.created.to!string ~"'";
        auto ret = this.getEntityManager().getSession().getTransaction().execute("insert into "~Field._tableName~" ("~fieldkey~") VALUES ("~values~")");
        if(ret != 1)
        {
            return false;
        }
        return true;
    }

    User findUser(string type, string accountName)
    {
        auto query = this.getEntityManager.createQuery!(User)(" select * from User u where u."~type~"=:accountName ;");
        query.setParameter("accountName", accountName);
        return query.getSingleResult();
    }

    int updatedLogin(string unid)
    {
        int curtime = cast(int)time();
        string ip = getClientIp();
        auto update = this.getEntityManager.createQuery!(User)(" update User u set u.login_number = login_number+1, u.last_login_ip = :ip, u.last_login_time = :curtime, u.updated_ip = :ip, u.updated = :curtime  where u.unid = :unid limit 1 ");
        update.setParameter("unid", unid);
        update.setParameter("ip", ip);
        update.setParameter("curtime", curtime);
        return update.exec();
    }

}