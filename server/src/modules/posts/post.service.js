import {getPosts} from "./post.repository.js"

const fetchFeedPosts = async(username) =>{
    const result = await getPosts();
    return result.rows;
}

export {fetchFeedPosts}