import express from 'express';
import { promises as fspromises } from 'fs';

const book3Route = express.Router();

book3Route.put('/', async (req, res) => {
    const bookFile = await fspromises.writeFile('bookFile.txt', ' The Best book in the whole world is the Bible');
    res.status(200).send('using a PUT endpoint i just overwright the bookFile content')
})


export default book3Route;
