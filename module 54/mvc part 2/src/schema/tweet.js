import mongoose from "mongoose";
import { maxLength, required } from "zod/v4-mini";

const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true,
        maxLength:280
    }


})

const Tweet = mongoose.model("tweet",tweetSchema);

export default Tweet;