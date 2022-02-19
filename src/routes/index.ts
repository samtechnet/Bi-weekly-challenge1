import express from 'express';
import bookRoute from './api/book';
import book2Route from './api/book2';
import book3Route from './api/book3';
import book4Route from './api/book4';


const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('this is book route')
})

routes.use('/book', bookRoute);
routes.use('/book2', book2Route);
routes.use('/book3', book3Route);
routes.use('book4', book4Route)

export default routes; 