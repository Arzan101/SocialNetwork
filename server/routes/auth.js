import express from "express";
import mongoose from "mongoose";
import '../../server/models/user.js'

const router = express.Router();
const User = mongoose.model("User");

router.get('/', (req,res)=>{
       res.send("hello by auth ")
});

router.post('/signup',(req,res)=>{
       const {name, email, password}=req.body;
       if(!email || !password || !name){
           return res.status(422).json({error:"please add all details"})
       }
       User.findOne({email:email})
           .then((savedUser) =>{
              if(savedUser){
                  return res.status(422).json({error:"User already Exists with that email"})
              }
              const user = new User({
                     email,
                     password,
                     name
              })
              user.save()
                  .then(user => {
                     res.json({message:"Saved Successfully on DB"})
                  })
                  .catch(err=>
                     {
                      console.log(err)
                  })


           })
           .catch(err=>{
              console.log(err);
           })

});

export default router;