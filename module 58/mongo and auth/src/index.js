const express = require("express");
// const bodyParser = require("body-parser")
const app = express();
const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbconfig.js");
const User = require("./schema/userSchema.js");
const userRouter = require("./routes/userRoutes.js");
const { cartRouter } = require("./routes/cartRouter.js");


app.use(express.json())
app.use(express.text())
app.use(express.urlencoded())

app.use("./users", userRouter)
app.use("./carts", cartRouter)

app.post("/ping",(req, res)=>{
    console.log(req.body);
    return res.json({message:"pong"})
})



app.listen(serverConfig.PORT,async()=>{
    await connectDB();
    console.log(`server is on PORT no:${serverConfig.PORT}...`)
    

    const newUser = await User.create({
        email:"a@gmail.coom",
        password:"1234",
        firstName:"Niladri",
        lastName:"Maji",
        mobileNum:"123456789"
    });
    console.log("create neww user"),
    console.log(newUser)
})


