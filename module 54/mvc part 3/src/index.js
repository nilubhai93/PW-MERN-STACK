import express from "express"
import path from "path"
const app = express();


app.set("view engine","ejs");
app.set("views",import.meta.dirname + ("/views"))

app.use(express.json());
app.use(express.urlencoded());




app.get("/",(req,res)=>{
  res.render("index")
})





app.get("/ping",(req,res)=>{
    return res.json({
        name:"nilu",
        title:"maji",
        age:"24"
    })    
})

app.all("*", (req,res)=>{
    return res.status(404).json({
        message:"not found"
    })
})


app.listen(PORT, ()=>{
    console.log("Server is running..");
});

