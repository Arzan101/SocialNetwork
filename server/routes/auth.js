// PATH : server/routes/auth.js
import express from "express";
import mongoose from "mongoose";
import '../../server/models/user.js';
import bcryptjs from "bcryptjs";

const router = express.Router();
const User = mongoose.model("User");

router.get('/', (req,res)=>{
    res.send("hello from routes/auth.js")
});

router.post('/signup', (req,res) => {
   const {name,email,password} = req.body;
   if(!name || !email || !password){
       return res.status(422).json({error:"Please add all details"})
   }
   User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
               return res.status(422).json({error:"User already Exists with that email"});
            }
            bcryptjs.hash(password,12)
                    .then(hashedpassword=>{
                            const user = new User({
                                name:name,
                                email:email,
                                password:hashedpassword
                             })
                            user.save()
                                .then(user=>{
                                    res.json({message:"User saved Successfully in Database"})
                                })
                                .catch(err=>{
                                    console.log(err)
                                })
                 })
         })
        .catch(err=>{
            console.log(err)
        })
});

export default router;