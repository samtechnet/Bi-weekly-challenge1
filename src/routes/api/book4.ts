import express from 'express';
import { promises as fspromises } from 'fs';


const book4Route = express.Router();

book4Route.delete('/', async (reg, res) => {
    await fspromises.unlink('bookFile.txt');

    res.status(204).send(" File deleted successfully");
    
});




export default book4Route;