export default (route) => {
    route.get('/teens', (req, res) => {
        req.$models.teen.findAll({
                attributes: ['name', 'email', 'nickname', 'point', 'score', 'gender', 'birthday', 'responsibleId', 'cardId'],
                include: [{
                    model: req.$models.card
                }]
            }).then(teens => res.json(teens || {}))
            .catch(error => res.status(400).send(error));
    })
    route.get('/teens/:id', (req, res) => {
        req.$models.teen.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ['name', 'email', 'nickname', 'point', 'score', 'gender', 'birthday', 'responsibleId', 'cardId'],
                include: [{
                    model: req.$models.card
                }]
            }).then(teens => res.json(teens || {}))
            .catch(error => res.status(400).send(error));
    })

    route.get('/teens/:id/activities', (req, res) => {
        req.$models.activity.findAll({
                where: {
                    teenId: req.params.id
                },
                include: [{
                    model: req.$models.task
                }]
            }).then(teens => res.json(teens || {}))
            .catch(error => res.status(400).send(error));
    })

    route.get('/teens/:id/tasks', (req, res) => {
        req.$models.task.findAll({
            where: {
                teenId: req.params.id
            }
        }).then(teens => res.json(teens || {}))
    })

    route.put('/teens/:id', (req, res) => {
        req.$models.teen.findOne({
            where: {
                id: req.params.id
            }
        }).then((teen) => {
            if (teen) {
                teen.updateAttributes({
                    point: req.body.point
                }).then((teen) => {
                    res.send(teen);
                }).catch(error => res.status(400).send(error));
            }
        }).catch(error => res.status(400).send(error));
    })

    route.post('/teens', (req, res) => {
        req.$models.teen.create({
            name: req.body.name,
            email: req.body.email.toLowerCase(),
            nickname: req.body.nickname,
            score: req.body.score,
            point: req.body.point,
            gender: req.body.gender,
            password: req.body.password,
            birthday: req.body.birthday,
            cardId: req.body.cardId,
            responsibleId: req.body.responsibleId
        }).then((teen) => {
            delete teen.password;
            res.status(201).send(teen);
        }).catch(error => res.status(400).send(error));
    })

    return route;
}