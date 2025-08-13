const {model} = require("mongoose")

function createUser(req , res){
    console.log("create user controller called")
    console.log(req.body)
    //todo:reg the user

    return res.json({
        message:ok
    })
}

module.exports = {
    createUser
}
