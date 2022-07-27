import express from "express";

const router = express.Router();

router.get('/', (req,res)=>{
       res.send("hello by auth ")
});

router.post('/signup', (req,res)=>{

});

export default router;