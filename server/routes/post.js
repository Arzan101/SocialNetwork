import express from "express";
import mongoose from "mongoose";
import { requireLogin } from "../middleware/requireLogin";
import "../models/post.js"

const router = express.Router()
const Post = mongoose.model("Post");

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body}=req.body;
    if(!title || !body){
        return res.status(422).json({error:"Please add all fields"});
    }

    const post = new post({
        title:title,
        body:body,
        postedBy:req.user
    })

    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })

    .catch(err=>{
        console.log(err);
    })
})

router.get("mypost",requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .then(mypost=>{
        res.json({myppost})
    })
    .catch(err=>{
        console.log(err);
    })

})