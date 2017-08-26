import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import genero from './app/routes/genero';

const app = express();

app.set('port', 8080)

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//rotas
app.route(genero(app))

export default app;