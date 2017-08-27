import DB from '../models';

export default (route) => {
    route.get('/responsibles', (req, res) => {
        DB.responsible.findAll().then(responsibles => res.json(responsibles))
    })
    route.get('/responsibles/:id', (req, res) => {
        DB.responsible.findAll({
            where: {
                id: req.params.id
            }
        }).then(responsibles => res.json(responsibles))
    })

    route.get('/responsibles/:id/teens', (req, res) => {
        DB.responsible.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: DB.teen
            }]
        }).then(responsibles => res.json(responsibles || {}))
    })

    route.post('/responsibles', (req, res) => {
        DB.responsible.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }).then(() => {
            res.status(201).send();
        }).catch(error => res.status(400).send(error));
    })

    return route;
}