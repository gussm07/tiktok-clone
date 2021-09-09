import express  from "express";
import mongoose  from "mongoose";
import Data from './data.js';
import Videos from './dbModel.js';
 

                                    /* START APP CONFIG */

/* create a simple instance */
const app=express();
/* create a port */
const port = 9000;
                                    /* END APP CONFIG */

                                    /* START MIDDLEWARES */
//pasa los datos a json
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()
})

                                    /* END MIDDLEWARES */


                                    /* START DATABASE CONFIG */
                                
const connection_url = 'mongodb+srv://admin:y7pP!!b7N88CkWk@cluster0.xkbzo.mongodb.net/tiktok?retryWrites=true&w=majority'

/* MAKE CONNECTION USING MONGOOSE, ELEMENTS DEFINIED BY DEFAULT */
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true
})
                                    /* END DATABASE CONFIG */

                                    /* START API ENDPOINTS */

/* creating a health check API return hello world*/
app.get('/',(req,res)=>res.status(200).send('hello'));
app.get('/v1/posts',(req,res) => res.status(200).send(Data))

app.get('/v2/posts',(req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.post("/v2/posts", (req, res) => {
    //POST REQUEST IS TO ADD DATA TO THE DATABASE 
    //IT WILL LEY US ADD A VIDEO DOCUMENT TO THE VIDEOS COLLECTION
   const dbVideos = req.body;

    Videos.create(dbVideos, (err,data) => {
      if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

                                    /* END API ENDPOINTS */

app.listen(port,()=>console.log(`listening on localhost:${port}`));