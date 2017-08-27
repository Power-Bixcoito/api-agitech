import DB from '../models';

export default (route) => {
    route.post('/authentication', (req, res) => {
        DB.responsible.findAll({
            where: {
                email: req.params.email
            }
        }).then(responsible => res.json(responsible))
    })

    route.post('/login', (req, res) => {
        DB.responsible.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(responsible => {
            if (responsible) {
                res.json(responsible)
            } else {
                DB.teen.findOne({
                    where: {
                        email: req.body.email,
                        password: req.body.password
                    }
                }).then(responsible => {
                    if (responsible) {
                        res.json(responsible)
                    } else {
                        res.status(400).send({message: "Email ou senha inválidos."})
                    }
                })
            }
        })
    })

    return route;
}