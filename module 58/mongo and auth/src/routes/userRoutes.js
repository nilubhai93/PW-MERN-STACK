const express = require("express");
const { createUser } = require("../controllers/userController");

const userRouter = express.Router(0);

userRouter.post("/", createUser )

module.exports = userRouter;