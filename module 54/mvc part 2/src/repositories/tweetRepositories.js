import Tweet from "../schema/tweet.js"

export const createTweet = async({ body })=>{
    try {
        const tweet = await Tweet.create({body});
        return tweet;
    } catch (error) {
        throw Error
    }
}

export const getTweet = async()=>{
    try {
        const tweets = await Tweet.find();
        return tweets;
    } catch (error) {
        throw Error
    }
}

export const getTweetById = async(tweetId)=>{
    try {
        const tweet = await Tweet.findById(tweetId);
        return tweet;
    } catch (error) {
        throw Error
    }
}
