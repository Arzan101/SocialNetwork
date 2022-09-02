// PATH: server/index.js
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/auth.js';
import './models/user.js';

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(router);

const customMiddleware = (req,res,next) =>{
    console.log("Middleware Executed!!!");
    next();
}
//app.use(customMiddleware);
app.get("/home",(req,res)=>{
    console.log('Hello from Home Page'); //Terminal
    res.send("I am Home Page"); //Browser
})
app.get("/login",customMiddleware,(req,res)=>{
    console.log('Hello from Login Page'); //Terminal
    res.send("I am Login Page") //Browser
})

app.listen(PORT,()=>{
    console.log("SERVER RUNNING ON:",PORT) //Terminal
})

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.1np1skv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log(`SERVER connect DATABASE through: ${PORT}`)
})




