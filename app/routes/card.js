export default (route) => {
    route.get('/cards', (req, res) => {
        req.$models.card.findAll()
            .then(cards => res.json(cards || {}))
            .catch(error => res.status(400).send(error));
    })
    route.get('/cards/:id', (req, res) => {
        req.$models.card.findOne({
                where: {
                    id: req.params.id
                }
            }).then(cards => res.json(cards || {}))
            .catch(error => res.status(400).send(error));
    })

    route.post('/cards', (req, res) => {
        req.$models.card.create({
            cardNumber: req.body.cardNumber,
            responsibleId: req.body.responsibleId,
            proxy: req.body.proxy,
            cvv: req.body.cvv,
            pin: req.body.pin,
            validDate: req.body.validDate
        }).then((card) => {
            res.status(201).send(card);
        }).catch(error => res.status(400).send(error));
    })

    return route;
}