import DB from '../models';

export default (route) => {
    route.get('/responsibles/:id', (req, res) => {
        DB.responsible.findOne({
            where: {
                id: req.params.id
            }
        }).then(responsibles => res.json(responsibles || {}))
    })

    route.get('/responsibles/:id/teens', (req, res) => {
        DB.teen.findAll({
            where: {
                responsibleId: req.params.id
            },
            attributes:['id','name', 'email','nickname','score','gender','birthday','responsibleId','cardId']
        }).then(teens => {
            delete teens.password;
            res.json(teens || [])
        })
    })

    route.get('/responsibles/:id/activities', (req, res) => {
        DB.activity.findAll({
            where: {
                responsibleId: req.params.id
            }
        }).then(activities => res.json(activities || []))
    })

    route.get('/responsibles/:id/tasks', (req, res) => {
        DB.task.findAll({
            where: {
                responsibleId: req.params.id
            }
        }).then(tasks => res.json(tasks || []))
    })

    route.post('/responsibles', (req, res) => {
        DB.responsible.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }).then((responsible) => {
            delete responsible.password;
            res.status(201).send(responsible);
        }).catch(error => res.status(400).send(error));
    })

    return route;
}