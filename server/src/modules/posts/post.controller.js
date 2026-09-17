import {fetchFeedPosts, uploadNewPost} from "./post.service.js"
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
        const {title,image_url,content} = req.body;
        const postObject = {
            username,
            title,
            content,
            image_url: image_url || null // Optional: explicitly convert undefined to null for clarity
        };
        const result = await uploadNewPost(postObject);
        res.status(201).json({message:"Post created Successfully"})
    }
    catch(error){
        next(error)
    }
}



export {fetchPosts,uploadPost}