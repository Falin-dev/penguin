import { getPosts, insertNewPost, insertLike, deleteLike } from "./post.repository.js"
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "../../config/env.js";

const supabase = createClient(
    SUPABASE_URL, SUPABASE_KEY
)
const fetchFeedPosts = async (username,page,limit) => {
    const pageLimit = parseInt(limit) || 10
    const pageNumber = parseInt(page) || 1
    
    const offset = (pageNumber -1) * pageLimit
    const result = await getPosts(username, offset,pageLimit);


    return result.rows;
}

const uploadNewPost = async (postObject) => {

    let imageUrl = null;
    if (postObject.imageFile) {
        const fileName = `post_${Date.now()}_${postObject.imageFile.originalname}`
        const { data, error } = await supabase.storage.from('post-images').upload(fileName, postObject.imageFile.buffer, {
            contentType: postObject.imageFile.mimetype
        })
        if (error) throw error;
        const { data: urlData } = supabase.storage.from('post-images').getPublicUrl(fileName);
        imageUrl = urlData.publicUrl
    }
    delete postObject.imageFile
    postObject.image_url = imageUrl

    const result = await insertNewPost(postObject)
    return result;
}

const likePost = async(postId,username)=>{
    const result = await insertLike(postId,username)
    return result
}
const removeLike = async(postId, username)=>{
    const result = await deleteLike(postId,username)
    return result
}


export { fetchFeedPosts, uploadNewPost, likePost, removeLike }