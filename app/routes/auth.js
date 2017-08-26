import DB from '../models';

export default (route) => {
    route.post('/authentication', (req, res) => {
        DB.responsible.findAll({
            where: {
                email: req.params.email
            }
        }).then(responsible => res.json(responsible))
    })

    return route;
}