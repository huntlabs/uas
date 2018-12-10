module app.component.appserver.repository.AppsRepository;

import hunt.entity;
import app.component.appserver.model.Apps;
import hunt.framework;

class AppsRepository : EntityRepository!(Apps, int)
{
    private EntityManager _entityManager;

    this(EntityManager manager = null)
    {
        _entityManager = manager is null ? createEntityManager() : manager;
        super(_entityManager);
    }

    Apps findByAppid(string appid)
    {
        auto query = this.getEntityManager.createQuery!(Apps)(" select * from Apps a where a.appid=:appid ;");
        query.setParameter("appid", appid);
        return query.getSingleResult();
    }
}