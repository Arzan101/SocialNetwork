import express from "express";
import mongoose from "mongoose";
import { requireLogin } from "../middleware/requireLogin";

const router = express.Router()

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body}=req.body;
    if(!title || !body){
        return res.status(422).json({error:"Please add all fields"});
    }

    const post = new post({
        title:title,
        body:body,
        postedBy:re.user
    })

    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})