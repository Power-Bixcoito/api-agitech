import DB from '../models';

export default (route) => {
    route.get('/teens', (req, res) => {
        DB.teen.findAll().then(teens => res.json(teens))
    })
    route.get('/teens/id/:id', (req, res) => {
        DB.teen.findAll({
            where: {
                id: req.params.id
            }
        }).then(teens => res.json(teens))
    })
    route.get('/teens/responsible/:responsibleId', (req, res) => {
        DB.teen.findAll({
            where: {
                responsibleId: req.params.responsibleId
            }
        }).then(teens => res.json(teens))
    })
    route.get('/teens/card/:cardId', (req, res) => {
        DB.teen.findAll({
            where: {
                cardId: req.params.cardId
            }
        }).then(teens => res.json(teens))
    })

    route.post('/teens', (req, res) => {
        DB.teen.create({
            name: req.body.name,
            email: req.body.email.toLowerCase(),
            nickname: req.body.nickname,
            score: req.body.score,
            gender: req.body.gender,
            password: req.body.password,
            birthday: req.body.birthday,
            cardId: req.body.cardId,
            responsibleId: req.body.responsibleId
        }).then(() => {
            res.status(201).send();
        }).catch(error => res.status(400).send(error));
    })

    return route;
}