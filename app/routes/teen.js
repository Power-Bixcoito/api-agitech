import DB from '../models';

export default (route) => {
    route.get('/teens', (req, res) => {
        DB.activity.findAll().then(teens => res.json(teens))
    })
    route.get('/teens/id/:id', (req, res) => {
        DB.activity.findAll({where: {id: req.params.id}}).then(teens => res.json(teens))
    })
    route.get('/teens/responsible/:responsibleId', (req, res) => {
        DB.activity.findAll({where: {responsibleId: req.params.responsibleId}}).then(teens => res.json(teens))
    })
    route.get('/teens/card/:cardId', (req, res) => {
        DB.activity.findAll({where: {cardId: req.params.cardId}}).then(teens => res.json(teens))
    })

    return route;
}