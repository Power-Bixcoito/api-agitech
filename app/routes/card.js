import DB from '../models';

export default (route) => {
    route.get('/cards', (req, res) => {
        DB.card.findAll().then(cards => res.json(cards))
    })
    route.get('/cards/id/:id', (req, res) => {
        DB.card.findAll({where: {id: req.params.id}}).then(cards => res.json(cards))
    })

    return route;
}