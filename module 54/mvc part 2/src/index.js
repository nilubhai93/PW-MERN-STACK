import express from "express"
import path from "path"
import { PORT } from './config/serverConfig.js';
import apiRouter from "./routes/apiRoutes.js"
import connectDB from "./config/dbConfig.js";
const app = express();



app.set("view engine","ejs");
app.set("views",import.meta.dirname +"/views")

app.use(express.json());
app.use(express.urlencoded());


app.use("/api",apiRouter)




app.get("/",(req,res)=>{
  res.render("index")
})


// app.all("*",(req,res)=>{
//     return res.status(404).json({
//         message:"Not Found"
//     })
// })






app.listen(PORT, ()=>{
    console.log("Server is running..");
    connectDB();
});

