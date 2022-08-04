import express from "express";
import mongoose from "mongoose";

const router = express.Router();
const User = mongoose.model("User");

router.get('/', (req,res)=>{
       res.send("hello by auth ")
});

router.post('/signup',(req,res)=>{
       const {name, email, password}=req.body;
       if(!email || !password || !name){
              res.status(422).json({error:"please add all details"})
       }
       User.findOne({email:email})
           .then((savedUser) =>{
              if(savedUser){
                     res.status(422).json({error:"User already Exists with that email"})
              }

           })
           .catch()

});

export default router;