import DB from '../models';

export default (route) => {
    route.get('/tasks', (req, res) => {
        DB.task.findAll().then(tasks => res.json(tasks))
    })
    route.get('/tasks/id/:id', (req, res) => {
        DB.task.findAll({
            where: {
                id: req.params.id
            }
        }).then(tasks => res.json(tasks))
    })
    route.get('/tasks/responsible/:responsibleId', (req, res) => {
        DB.task.findAll({
            where: {
                responsibleId: req.params.responsibleId
            }
        }).then(tasks => res.json(tasks))
    })
    route.get('/tasks/teen/:teenId', (req, res) => {
        DB.task.findAll({
            where: {
                teenId: req.params.teenId
            }
        }).then(tasks => res.json(tasks))
    })
    route.get('/tasks/activity/:activityId', (req, res) => {
        DB.task.findAll({
            where: {
                activityId: req.params.activityId
            }
        }).then(tasks => res.json(tasks))
    })

    route.post('/tasks', (req, res) => {
        DB.card.create({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            startedAt: req.body.startedAt,
            deadline: req.body.deadline,
            reward: req.body.reward,
            responsibleId: req.body.responsibleId,
            teenId: req.body.teenId,
        }).then(() => {
            res.send().status(201);
        });
    })

    return route;
}