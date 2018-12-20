module app.component.account.repository.UserInfoRepository;

import hunt.entity;
import app.component.account.model.UserInfo;

class UserInfoRepository : EntityRepository!(UserInfo, int)
{
    private EntityManager _entityManager;

    this(EntityManager manager = null)
    {
        _entityManager = manager is null ? createEntityManager() : manager;
        super(_entityManager);
    }

    UserInfo findByUnid(string unid)
    {
        auto query = this.getEntityManager.createQuery!(UserInfo)(" select * from UserInfo a where a.unid=:unid;");
        query.setParameter("unid", unid);
        return query.getSingleResult();

    }
}