const express = require("express");
const app = express();
const serverConfig = require("./config/serverConfig.js")



app.listen(serverConfig.PORT,()=>{
    console.log(`server is on PORT no:${serverConfig.PORT}...`)
})