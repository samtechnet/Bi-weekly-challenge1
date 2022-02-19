import express, { response } from 'express';
import https from "https";

import { promises as fspromise } from 'fs';
import { Http2ServerRequest } from 'http2';
import csvtojson from 'csvtojson';
import fs from 'fs';
import { rejects } from 'assert';

const book2Route = express.Router();
//const csvfilepath = "bookFile.csv"




book2Route.get('/', async (req, res) => {
    
    //const csvFilePath = "/bookFile.csv"
    //csv()
        //     .fromFile(csvfilepath)
        //     .then((json) => {
        //         console.log(json)
        //     });
        //     const bookFile = await fspromise.open('bookFile.csv', 'a+');
        //   await bookFile.writeFile("output.json", JSON.stringify(JSON) );

    // let csvStream = csv.csvFilePath: ("/bookFile.csv")
    //     .on("data", async function (record: string) {
    //         csvStream.pause()
    //         const fileName = await fspromise.open('bookFile.csv', 'a+');
    //         await fileName.write('    my best book is "THE SECRET" Authored by: RHONDA BYRNE.');

    //         csvStream.close()
    //     }).on("error", function (err: any) {
    //         console.log(err);
    //     });
    const bookFile = await fspromise.open('bookFile.txt', 'a');
    await bookFile.write('   other books i like are : GetSet, Blink, RichDad PoorDad etc');
        


     res.send('I just update the bookFile content')

    
    
});

export default book2Route


function csv() {
    throw new Error('Function not implemented.');
}

function csvPause() {
    throw new Error('Function not implemented.');
}

