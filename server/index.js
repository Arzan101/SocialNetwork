import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;
const customMiddleware = (req,res) =>{
    console.log("Middleware Executed!!!")
}


app.get("/home",(req,res)=>{
    console.log('hello from home page')
    res.send("hello");
})

app.get("/about",(req,res)=>{
    console.log('hello from About page')
    res.send("hello");
})

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.1np1skv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log(`SERVER DATABASE RUNNING ON: ${PORT}`)
})