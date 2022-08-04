import express from "express";

const router = express.Router();

router.get('/', (req,res)=>{
       res.send("hello by auth ")
});

router.post('/signup',(req,res)=>{
       const {name, email, password}=req.body;
       if(!email || !password || !name){
              res.status(422).json({error:"please add all details"})
       }
       res.json({message:"Successfully Posted"})

});

export default router;