using trainer as db from '../db/data-model';

@protocol: 'rest'
@path: 'shanksrv'
service CatalogService{
    entity trainers as projection on db.training;
    
    @open
    type object {};
    action activatetraining( id : UUID) returns object;
}
