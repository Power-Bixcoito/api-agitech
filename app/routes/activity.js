export default (route) => {
    route.get('/activities', (req, res) => {
        req.$models.activity.findAll({
                include: [{
                    model: req.$models.task
                }]
            }).then(activities => res.json(activities || {}))
            .catch(error => res.status(400).send(error));
    })
    route.get('/activities/:id', (req, res) => {
        req.$models.activity.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    model: req.$models.task
                }]
            }).then(activities => res.json(activities || {}))
            .catch(error => res.status(400).send(error));
    })
    route.get('/activities/responsible/:responsibleId', (req, res) => {
        req.$models.activity.findAll({
                where: {
                    responsibleId: req.params.responsibleId
                }
            }).then(activities => res.json(activities))
            .catch(error => res.status(400).send(error));
    })
    route.get('/activities/teen/:teenId', (req, res) => {
        req.$models.activity.findAll({
                where: {
                    teenId: req.params.teenId
                }
            }).then(activities => res.json(activities))
            .catch(error => res.status(400).send(error));
    })

    route.post('/activities', (req, res) => {
        req.$models.activity.create({
            title: req.body.title,
            description: req.body.description,
            startedAt: req.body.startedAt,
            deadline: req.body.deadline,
            teenId: req.body.teenId,
            responsibleId: req.body.responsibleId,
        }).then((activity) => {
            res.status(201).send(activity);
        }).catch(error => res.status(400).send(error));
    })

    return route;
}