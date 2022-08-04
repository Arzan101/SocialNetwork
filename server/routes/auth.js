import express from "express";

const router = express.Router();

router.get('/', (req,res)=>{
       res.send("hello by auth ")
});

router.post('/signup',(req,res)=>{
       const {name, email, password}=req.body;

});

export default router;