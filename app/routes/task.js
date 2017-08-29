export default (route) => {
    route.get('/tasks', (req, res) => {
        req.$models.task.findAll()
            .then(tasks => res.json(tasks || {}))
            .catch(error => res.status(400).send(error));
    })
    route.get('/tasks/:id', (req, res) => {
        req.$models.task.findOne({
                where: {
                    id: req.params.id
                }
            }).then(tasks => res.json(tasks || {}))
            .catch(error => res.status(400).send(error));
    })
    route.get('/tasks/responsible/:responsibleId', (req, res) => {
        req.$models.task.findAll({
                where: {
                    responsibleId: req.params.responsibleId
                }
            }).then(tasks => res.json(tasks))
            .catch(error => res.status(400).send(error));
    })
    route.get('/tasks/teen/:teenId', (req, res) => {
        req.$models.task.findAll({
                where: {
                    teenId: req.params.teenId
                }
            }).then(tasks => res.json(tasks))
            .catch(error => res.status(400).send(error));
    })
    route.get('/tasks/activity/:activityId', (req, res) => {
        req.$models.task.findAll({
                where: {
                    activityId: req.params.activityId
                }
            }).then(tasks => res.json(tasks))
            .catch(error => res.status(400).send(error));
    })

    route.post('/tasks', (req, res) => {
        req.$models.task.create({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed || false,
            startedAt: req.body.startedAt,
            deadline: req.body.deadline,
            reward: req.body.reward,
            responsibleId: req.body.responsibleId,
            activityId: req.body.activityId,
            teenId: req.body.teenId,
        }).then((task) => {
            res.status(201).send(task);
        }).catch(error => res.status(400).send(error));
    })

    return route;
}