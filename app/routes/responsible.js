export default (route) => {
    route.get('/responsibles', (req, res) => {
        req.$models.responsible.findAll()
            .then(responsibles => res.json(responsibles || {}))
            .catch(error => res.status(400).send(error));
    })
    route.get('/responsibles/:id', (req, res) => {
        req.$models.responsible.findOne({
                where: {
                    id: req.params.id
                }
            }).then(responsibles => res.json(responsibles || {}))
            .catch(error => res.status(400).send(error));
    })

    route.get('/responsibles/:id/teens', (req, res) => {
        req.$models.teen.findAll({
            where: {
                responsibleId: req.params.id
            },
            attributes: ['id', 'name', 'email', 'nickname', 'score', 'gender', 'birthday', 'responsibleId', 'cardId']
        }).then(teens => {
            delete teens.password;
            res.json(teens || [])
        }).catch(error => res.status(400).send(error));
    })

    route.get('/responsibles/:id/activities', (req, res) => {
        req.$models.activity.findAll({
                where: {
                    responsibleId: req.params.id
                }
            }).then(activities => res.json(activities || []))
            .catch(error => res.status(400).send(error));
    })

    route.get('/responsibles/:id/tasks', (req, res) => {
        req.$models.task.findAll({
                where: {
                    responsibleId: req.params.id
                }
            }).then(tasks => res.json(tasks || []))
            .catch(error => res.status(400).send(error));
    })

    route.post('/responsibles', (req, res) => {
        req.$models.responsible.create({
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