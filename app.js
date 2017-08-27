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

import DB from './app/models';

const app = express();

app.set('port', 8080)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

//rotas
app.route(activity(app))
app.route(responsible(app))
app.route(task(app))
app.route(teen(app))
app.route(card(app))
app.route(auth(app))

export default app;