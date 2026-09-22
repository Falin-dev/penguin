import PostCard from "../components/PostCard.jsx"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import { GridLoader } from "react-spinners";
import { getFeedPosts } from "../../../services/posts.service.js";

const FeedPage = () => {

    const [postList, setPostList] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const nav = useNavigate();
    useEffect(() => {
        if(!Cookies.get("ACCESS_TOKEN")){
            nav("/login")
            return
        }
        const getPosts = async () => {
            try {
                const data = await getFeedPosts();
                setPostList(data);
            }
            catch (e) {
                setErrorMsg(() => e.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        getPosts();
    }, [])

    return (
        <div className="tui-page">
            <h1>Feed</h1>
            {isLoading&&<GridLoader color="#ffffffff" />}
            {errorMsg && <p className="tui-error">{errorMsg}</p>}
            <ul className="tui-feed">
                {postList.map(e => <PostCard key={e.id} details={e} />)}
            </ul>
        </div>
    )
}

export default FeedPage