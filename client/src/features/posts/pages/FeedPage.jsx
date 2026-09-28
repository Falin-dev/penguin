import PostCard from "../components/PostCard.jsx"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import { GridLoader } from "react-spinners";
import { getFeedPosts } from "../../../services/posts.service.js";
import { AuthContext, AuthProvider } from "../../../context/AuthContext.jsx";
const FeedPage = () => {
    const {isLoggedIn} = useContext(AuthContext)
    const [postList, setPostList] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const nav = useNavigate();
    useEffect(() => {
        if(!isLoggedIn){
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
    }, [isLoggedIn,nav])

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