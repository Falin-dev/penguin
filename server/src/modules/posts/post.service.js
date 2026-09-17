import {getPosts,insertNewPost} from "./post.repository.js"

const fetchFeedPosts = async(username) =>{
    const result = await getPosts();
    return result.rows;
}

const uploadNewPost = async(postObject)=>{
    const result = await insertNewPost(postObject)
    return result;
}

export {fetchFeedPosts,uploadNewPost}