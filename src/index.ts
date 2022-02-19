import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import book from "./routes/api/book";
import books from "./routes/api/interface";
import routes from "./routes/index";
import { promises as fspromises } from "fs";



const app = express();

const PORT = 5000;

const books = [{
    ISBN: 123456,
    Autor:  "Bella Victor",
    Title: "Get SET"

}    
];

app.use(cors());

//configuring body parser middlerware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


 app.use('/api', routes);

app.get('/', (req, res) =>  {
    // try {
    //     const myFile = await fspromises.open('myFile.txt', 'a+')
    // } catch (error) {
    //     console.error('Got an error trying to write to file:' +  error)
    // }
    
      
      
    res.send('This is base API')
});







// app.get('/api', (req, res ) => {
//     res.status(200).send('Hello World');
// });

app.listen(PORT, () => console.log(`app started on port ${PORT}`));

export default app
