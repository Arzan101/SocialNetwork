import express from "express";
import { requireLogin } from "../middleware/requireLogin";

const router = express.Router()

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body}=req.body;
    if(!title || !body){
        return res.status(422).json({error:"Please add all details"});
    }


})