import {fetchFeedPosts, uploadNewPost, likePost, removeLike} from "./post.service.js"
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
        const {title,content} = req.body;
        const imageFile = req.file;
        const postObject = {
            username,
            title,
            content,
            imageFile : imageFile || null // Optional: explicitly convert undefined to null for clarity
        };
        const result = await uploadNewPost(postObject);
        res.status(201).json({message:"Post created Successfully"})
    }
    catch(error){
        next(error)
    }
}

const postLike = async(req,res,next)=>{
    try{
        const {postId} = req.params
        const {username} = req.user
        const result = await likePost(postId,username)
        res.status(201).json({message:"Post Liked"})
    }
    catch(error){
        next(error)
    }
}

const deletePostLike = async(req,res,next)=>{
    try{
        const {postId} = req.params
        const {username} = req.user
        const result = await removeLike(postId,username)
        res.status(200).json({message:"Post Unliked"})
    }
    catch(error){
        next(error)
    }
}

export {fetchPosts,uploadPost, postLike, deletePostLike}