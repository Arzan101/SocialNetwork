import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/auth.js';
import './models/user.js';

const app = express();
const PORT = 5000;

app.use(router);

const customMiddleware =(req,res,next)=>{
    console.log("Middleware Executed!!");
    next();
}
//app.use(customMiddleware); ye lege toh sabpe middleware lagega home about jo bhi h 

app.get("/home",(req,res)=>{
    console.log('home page executed')
    res.send("I AM home")
})
app.get("/login",customMiddleware,(req,res)=>{
    console.log('login page executed')
    res.send("I AM Login")
})
app.listen(PORT,()=>{
    console.log("SERVER RUNNING ON:",PORT)
})

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.1np1skv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log(`SERVER DATABASE RUNNING ON: ${PORT}`)
})
