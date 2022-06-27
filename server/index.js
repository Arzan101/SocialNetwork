import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.1np1skv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL)