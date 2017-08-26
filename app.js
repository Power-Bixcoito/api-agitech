import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import activity from './app/routes/activity';

const app = express();

app.set('port', 8080)

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//rotas
app.route(activity(app))

export default app;