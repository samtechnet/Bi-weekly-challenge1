import express from 'express';
import path from 'path'
import { promises as fspromise } from 'fs';
import { open } from 'fs/promises';
import csvtojson from 'csvtojson';


const bookRoute = express.Router();
let fileName = "bookFile"; 

bookRoute.post('/' , async (req, res) => {
    const fileName = await fspromise.open('bookFile.csv', 'a+');
    await fileName.write('    my best book is "THE SECRET" Authored by: RHONDA BYRNE.');
    
    
    
    res.status(200).send(`<p> THIS ENDPOINT CREATE AND WRITE A FILE NAME "bookFile</P>.`)
});

// bookRoute.post(' /:bookid', async (reg, res) => {
//     let filehandle = null;
// try {
//     filehandle = await open(' bookFile.txt', ' r');
//     await filehandle.truncate(4);
// } finally {
//     await filehandle.close();


// })
// fspromise.readFile('../bookFile.json', 'utf-8', (_err: express.Error , jsonString: any) => {
//     console.log(jsonString)
// };



export default bookRoute

//isClassStaticBlockDeclaration;