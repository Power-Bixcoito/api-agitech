import DB from '../models';

export default (route) => {
    route.get('/activities/:id', (req, res) => {
        DB.activity.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: DB.task
            }]
        }).then(activities => res.json(activities || {}))
    })
    route.get('/activities/responsible/:responsibleId', (req, res) => {
        DB.activity.findAll({
            where: {
                responsibleId: req.params.responsibleId
            }
        }).then(activities => res.json(activities))
    })
    route.get('/activities/teen/:teenId', (req, res) => {
        DB.activity.findAll({
            where: {
                teenId: req.params.teenId
            }
        }).then(activities => res.json(activities))
    })

    route.post('/activities', (req, res) => {
        DB.activity.create({
            title: req.body.title,
            description: req.body.description,
            startedAt: req.body.startedAt,
            deadline: req.body.deadline,
            teenId: req.body.teenId,
            responsibleId: req.body.responsibleId,
        }).then(() => {
            res.status(201).send();
        }).catch(error => res.status(400).send(error));
    })

    return route;
}