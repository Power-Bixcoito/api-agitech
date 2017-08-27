import DB from '../models';

export default (route) => {
    route.get('/teens/:id', (req, res) => {
        DB.teen.findOne({
            where: {
                id: req.params.id
            },
            attributes:['name', 'email','nickname','score','gender','birthday','responsibleId','cardId'],
            include: [{
                model: DB.card
            }]
        }).then(teens => res.json(teens || {}))
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
        }).then((teen) => {
            delete teen.password;
            res.status(201).send(teen);
        }).catch(error => res.status(400).send(error));
    })

    return route;
}