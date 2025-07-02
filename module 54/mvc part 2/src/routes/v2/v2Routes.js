import express from "express";
const router = express.Router();
import v2tweetRouter from "./v2tweets.js"

router.use("/tweets",v2tweetRouter)



export default router;