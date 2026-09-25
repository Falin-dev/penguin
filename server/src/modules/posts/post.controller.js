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



export {fetchPosts,uploadPost}