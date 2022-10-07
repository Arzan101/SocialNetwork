//Server/index.js=
import express from 'express';
import mongoose from 'mongoose';
import routerAuth from './routes/auth.js';
import routerPost from './routes/post.js';
import './models/post.js';
import './models/user.js';

const app = express();
const PORT = 5000;

const CONECTIONURL = 'mongodb+srv://glproject:glproject@cluster0.ai3cl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONECTIONURL).then(()=>{
    console.log(`SERVER is connected to MongoDB from: ${PORT}`);
}) 

app.use(express.json());
app.use(routerAuth);
app.use(routerPost);



app.listen(PORT,() => {
    console.log("SERVER running on:", PORT )
});