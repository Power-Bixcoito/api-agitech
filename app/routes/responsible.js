import DB from '../models';

export default (route) => {
    route.get('/responsibles', (req, res) => {
        DB.responsible.findAll().then(responsibles => res.json(responsibles))
    })
    route.get('/responsibles/id/:id', (req, res) => {
        DB.responsible.findAll({
            where: {
                id: req.params.id
            }
        }).then(responsibles => res.json(responsibles))
    })

    route.post('/responsibles', (req, res) => {
        DB.card.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }).then(() => {
            res.send().status(201);
        });
    })

    return route;
}