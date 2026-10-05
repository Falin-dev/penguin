import { useState } from "react"
import Cookies from "js-cookie"
import { likePost,unLikePost } from "../../../services/posts.service"

const PostCard = (props) => {
    const { details } = props
    const { name, title, content, image_url, posted_at, likes, id, is_liked_by_user } = details
    const [likesCount,setLikesCount] = useState(parseInt(likes,10));

    const [like, setLike] = useState(is_liked_by_user);
    async function toggleLike(id) {
        try {
            if (like === false) {
                const response = await likePost(id)
                if (response.status === 201) {
                    console.log("liked")
                    setLikesCount(likesCount=>likesCount+1)
                }
            }
            else{
                const response = await unLikePost(id)
                if(response.status===200){
                    console.log("disliked")
                    setLikesCount(likesCount=>likesCount-1)
                }
            }
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            setLike(e => !e)
        }

    }
    return (
        <li className="tui-post-card">
            <div className="tui-post-meta">
                <span className="tui-post-author">{name}</span>
                <span>{new Date(posted_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            {image_url && <img src={image_url} />}
            <div className="tui-post-actions">
                <button className={`tui-like-button ${like ? 'liked' : ''}`} onClick={() => toggleLike(id)}>
                    <span>{like ? '♥' : '♡'}</span>
                    <span>Likes: {likesCount}</span>
                </button>
            </div>
        </li>

    )

}
export default PostCard