import DB from '../models';

export default (route) => {
    route.get('/responsibles', (req, res) => {
        DB.responsible.findAll().then(responsibles => res.json(responsibles))
    })
    route.get('/responsibles/id/:id', (req, res) => {
        DB.responsible.findAll({where: {id: req.params.id}}).then(responsibles => res.json(responsibles))
    })

    return route;
}