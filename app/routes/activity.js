import DB from '../models';

export default (route) => {
    route.get('/activities', (req, res) => {
        DB.activity.findAll().then(activities => res.json(activities))
    })
    route.get('/activities/:id', (req, res) => {
        DB.activity.findAll({where: {id: req.params.id}}).then(activities => res.json(activities))
    })
    route.get('/activities/responsible/:responsibleId', (req, res) => {
        DB.activity.findAll({where: {responsibleId: req.params.responsibleId}}).then(activities => res.json(activities))
    })
    route.get('/activities/teen/:teenId', (req, res) => {
        DB.activity.findAll({where: {teenId: req.params.teenId}}).then(activities => res.json(activities))
    })

    return route;
}