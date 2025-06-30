import express from "express"
import morgan from "morgan"
const app = express();
app.use(morgan());

app.use(express.json());
app.use(express.urlencoded());


function mid1(req,res,next){
    console.log("mid1");
    next();
}
function mid2(req,res,next){
    console.log("mid2");
    next();
}
function mid3(req,res,next){
    console.log("mid3");
    next();
}

app.get("/ping",mid1,mid2,mid3,(req,res)=>{
    return res.json({
        name:"nilu",
        title:"maji",
        age:"24"
    })    
})


app.get("/tweets/:tid/comments/:cid",(req,res)=>{
    console.log(req.params);
    return res.json({
        message:"tweet details"
    })
})



app.post("/hello",(req,res)=>{
    console.log("query params", req.query);
    console.log("req body", req.body);
    return res({
        message:"world"
    })
})


app.listen(3000, ()=>{
    console.log("Server is running..");
});

