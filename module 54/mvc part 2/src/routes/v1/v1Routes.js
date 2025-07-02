import express from "express";
const router = express.Router();
import tweetRouter from "./tweet.js"
import commentRouter from "./comment.js"

router.use("/tweets",tweetRouter)
router.use("/comments",commentRouter)



export default router;