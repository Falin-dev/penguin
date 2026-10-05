import Cookies from "js-cookie"
import { api } from "./api";
const getFeedPosts = async () => {


    const fetchPosts = await api.get("/post");
    const result = await fetchPosts.json();

    if (fetchPosts.status === 200) {
        return result;

    }
    else {
        throw new Error(result.error || "Failed to fetch feed")
    }
}


async function likePost(postId) {
    const fetchToggleLike = await api.post(`/post/${postId}/like`)
    return fetchToggleLike
}

async function unLikePost(postId) {
    const fetchToggleLike = await api.delete(`/post/${postId}/like`)
    return fetchToggleLike
}
export { getFeedPosts, likePost, unLikePost }