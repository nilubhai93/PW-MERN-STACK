export const getTweets = (req,res)=>{
    return res.json({
        message: "welcome to tweet route"
    })
}

export const getTweetsById = (req,res)=>{
    return res.json({
        message: "welcome to tweet route",
        id:req.params.id
    })
}
export const createTweet = (req,res)=>{
    return res.json({
        message: "create tweet ",
        body:req.body
    })
}