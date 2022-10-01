// PATH : server/routes/auth.js
import express from "express";
import mongoose from "mongoose";
import '../../server/models/user.js';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
import { SecretValues } from "../keys.js";
import { requireLogin } from "../middleware/requireLogin.js";

const routerAuth = express.Router();
const User = mongoose.model("User");

router.get('/', (req,res)=>{
    res.send("hello from routes/auth.js")
});

// router.get("/protected",requireLogin,(req,res)=>{
//     res.send("hello user");
// })

routerAuth.post('/signup', (req,res) => {
   const {name,email,password} = req.body;
   if(!name || !email || !password){
       return res.status(422).json({error:"Please add all details"})
   }
   User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
               return res.status(500).json({error:"User already Exists with that email"});
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

//signin

routerAuth.post("/signin",(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(422).json({error:"SIGN IN :-Please add all details"});
    }
    User.findOne({email:email}).then(savedUser=> {
        if(!savedUser){
          return res.status(422).json({error:"Invalid Email or Password"});
        }
        bcryptjs.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"Server Successfully Signed In"})
                const token = jwt.sign({_id:savedUser._id},SecretValues);
                const {_id,name,email} = savedUser;
                res.json({token,user:{_id,name,email}});
                console.log(token);
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    });   
});


export default router;