export default (route) => {
    route.post('/authentication', (req, res) => {
        req.$models.responsible.findAll({
            where: {
                email: req.params.email
            }
        }).then(responsible => res.json(responsible))
            .catch(error => res.status(400).send(error));
    })

    route.post('/register', (req, res) => {
        if (req.body.tipo == 'responsible') {
            req.$models.responsible.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.mail,
            }).then((responsible) => {
                res.status(201).send(responsible);
            }).catch(error => res.status(400).send(error));
        } else {
            res.status(400).send('Somente responsáveis podem se registrar.');
        }
    })

    route.post('/login', (req, res) => {
        req.$models.responsible.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(responsible => {
            if (responsible) {
                res.json(responsible)
            } else {
                req.$models.teen.findOne({
                    where: {
                        email: req.body.email,
                        password: req.body.password
                    }
                }).then(responsible => {
                    if (responsible) {
                        res.json(responsible)
                    } else {
                        res.status(400).send({
                            message: "Email ou senha inválidos."
                        })
                    }
                }).catch(error => res.status(400).send(error));
            }
        }).catch(error => res.status(400).send(error));
    })

    return route;
}