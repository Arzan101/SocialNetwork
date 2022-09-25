import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
}); 


mongoose.model("Post",postSchema);