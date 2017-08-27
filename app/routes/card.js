import DB from '../models';

export default (route) => {
    route.get('/cards', (req, res) => {
        DB.card.findAll().then(cards => res.json(cards))
    })
    route.get('/cards/:id', (req, res) => {
        DB.card.findAll({
            where: {
                id: req.params.id
            }
        }).then(cards => res.json(cards))
    })

    route.post('/cards', (req, res) => {
        DB.card.create({
            cardNumber: req.body.cardNumber,
            responsibleId: req.body.responsibleId,
            proxy: req.body.proxy,
            cvv: req.body.cvv,
            pin: req.body.pin,
            validDate: req.body.validDate
        }).then(() => {
            res.status(201).send();
        }).catch(error => res.status(400).send(error));
    })

    return route;
}