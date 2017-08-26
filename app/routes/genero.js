import DB from '../models';

export default (route) => {
    route.get('/generos', (req, res) => {
        DB.generos.findAll().then(generos => res.json(generos))
    })

    return route;
}