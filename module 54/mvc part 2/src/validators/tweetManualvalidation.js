export const createTweetManualValidator = (req, res , next)=>{
    if(!req.body.tweet){
        return res.status(400).json({
            error:"Tweet is require..."
        })
    }
    next();
}