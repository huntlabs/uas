module app.component.account.repository.UserRepository;

import hunt.entity;
import app.component.account.model.User;
import hunt.datetime;
import app.lib.functions;

class UserRepository : EntityRepository!(User, int)
{
    private EntityManager _entityManager;

    this(EntityManager manager = null)
    {
        _entityManager = manager is null ? createEntityManager() : manager;
        super(_entityManager);
    }

    User findUser(string type, string accountName)
    {
        auto query = this.getEntityManager.createQuery!(User)(" select * from User u where u."~type~"=:accountName ;");
        query.setParameter("accountName", accountName);
        return query.getSingleResult();
    }

    int updatedLogin(string unid)
    {
        int curtime = time();
        string ip = getClientIp();
        auto update = this.getEntityManager.createQuery!(User)(" update User u set u.login_number = login_number+1, u.last_login_ip = :ip, u.last_login_time = :curtime, u.updated_ip = :ip, u.updated = :curtime  where u.unid = :unid limit 1 ");
        update.setParameter("unid", unid);
        update.setParameter("ip", ip);
        update.setParameter("curtime", curtime);
        return update.exec();
    }

}