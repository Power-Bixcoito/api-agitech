import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import activity from './app/routes/activity';
import task from './app/routes/task';
import teen from './app/routes/teen';
import card from './app/routes/card';
import responsible from './app/routes/responsible';
import auth from './app/routes/auth';

import models from './app/models';

const app = express();

app.set('port', 8080)

app.use(cors());
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
app.use(morgan('dev'));

//models on middleware
app.use((req, res, next) => {
  req.$models = models
  next()
})

app.get('/', (req, res) => {
  res.render('pages/index', {
    routes: app._router.stack
  })
})

//routes
app.route(activity(app))
app.route(responsible(app))
app.route(task(app))
app.route(teen(app))
app.route(card(app))
app.route(auth(app))

app.use((req, res) => {
  res.status(404).send('404: Page not Found');
})

export default app;