import express, { Request, Response } from 'express';
import api from './api';
import views from './views';
import dotenv from 'dotenv';
import * as hbs from 'express-handlebars';

const app = express();

const handlebars = hbs.create({
    defaultLayout: 'main',
});
dotenv.config();
app.use(express.static('public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

app.use('/api', api);
app.use('/', views);

const port = 3020;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

