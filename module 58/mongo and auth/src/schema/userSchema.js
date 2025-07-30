const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name must be require"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "last name must be require"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email must be require"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password must be require"],
        trim: true,
        // match:[],
    },
    mobileNum:{
        type:String,
        require:true,
    }
},{
    timestamps:true
});

const User = mongoose.model("User", userSchema);
module.exports = User;