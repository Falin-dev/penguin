import { getPosts, insertNewPost } from "./post.repository.js"
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "../../config/env.js";
const fetchFeedPosts = async (username) => {
    const result = await getPosts();
    return result.rows;
}
const supabase = createClient(
    SUPABASE_URL, SUPABASE_KEY
)
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



export { fetchFeedPosts, uploadNewPost }