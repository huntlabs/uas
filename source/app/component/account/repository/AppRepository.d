module app.component.account.repository.AppRepository;

import app.component.account.model.App;
import hunt.logging;
import hunt.entity;

class AppRepository : EntityRepository!(App, int)
{}