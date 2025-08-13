const express = require("express");
const { getCartById } = require("../controllers/cartCOntroller");
const cartRouter = express.Router();

cartRouter.get("./:id" , getCartById )

module.exports ={cartRouter}