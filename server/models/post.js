import mongoose from "mongoose";
import { ObjectId } from "mongoose.Schema.Types";

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
    },
    postedBy:{
        type:ObjectId,
        ref:"user"
    }
}); 


mongoose.model("Post",postSchema);