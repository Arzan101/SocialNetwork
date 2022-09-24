import jwt from 'jsonwebtoken'
import { SecretValues } from "../keys.js";
import mongoose from 'mongoose';
import "../models/user.js";
export const requireLogin=(req,res,next)=>
 {
 const {authorization} = req.headers;

 if(!authorization){
    return res.status(401).json({error:"you must be Logged In!"})
 }

 const token=authorization.replace("Bearer","")
 jwt.verify(token,SecretValues,(err,payload)=>{
   if(err){
      res.status(401).json({error:"You must be Logged In!"});
  }
    
 })

 const {_id}= payload;
 User.findById(_id).then(userdata=>{
   req.user=userdata
 })


}