import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL)
    }catch(error){
        console.log(error);
        console.log("failed to connect to MongoDB");

    }
}