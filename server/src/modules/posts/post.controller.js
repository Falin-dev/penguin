import {fetchFeedPosts} from "./post.service.js"

const fetchPosts = async (req,res,next)=>{
    try{
        const {username} = req.user
        const result = await fetchFeedPosts(username)
        res.json(result)
    }
    catch(error){
        next(error)
    }
}

const uploadPost = async(req,res,next)=>{
    try{
        const {username} = req.user
        
    }
}



export {fetchPosts,uploadPost}