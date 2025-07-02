import express from "express";
const  router = express.Router();
import { createTweet,getTweets,getTweetsById } from "../../controllers/tweetControllers.js";
import { createTweetManualValidator } from "../../validators/tweetManualvalidation.js";
import {validate} from "../../validators/zodValidator.js"
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";

router.get("/",getTweets)

router.get("/:id",getTweetsById)

router.post("/",validate(tweetZodSchema),createTweet);



export default router;

