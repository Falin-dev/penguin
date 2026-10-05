import { useState } from "react"

const PostCard = (props) => {
    const [like, setLike] = useState(false);
    const { details } = props
    const { name, title, content, image_url, posted_at, likes, id } = details
    async function toggleLike(id) {
        try {
            if (like === false) {
                fetchToggleLike = await fetch(`http://localhost:3000/post/:${id}/like`, {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + Cookies.get("ACCESS_TOKEN"),
                        "Content-Type": "application/json"
                    }
                })
                const responseLike = await fetchToggleLike.json();
                if (fetchToggleLike.status === 201) {
                    setLike(e => !e)
                    return;
                }
            }
            else{
                
            }
        }
        catch(e){

        }

    }
    return (
        <li className="tui-post-card">
            <div className="tui-post-meta">
                <span className="tui-post-author">{name}</span>
                <span>{posted_at}</span>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            {image_url && <img src={image_url} />}
            <button onClick={e => toggleLike(id)} style={{ backgroundColor: like ? 'red' : 'transparent' }}>
                <p>Likes: {likes}</p>
            </button>
        </li>

    )

}
export default PostCard