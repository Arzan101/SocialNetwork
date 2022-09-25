import express from "express";
import { requireLogin } from "../middleware/requireLogin";

const router = express.Router()

router.post('/createpost',requireLogin,(req,res)=>{

})