import PostCard from "../components/PostCard.jsx"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { GridLoader } from "react-spinners";


const FeedPage = () => {

    const [postList, setPostList] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const fetchPosts = await fetch("http://localhost:3000/post/", {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + Cookies.get('ACCESS_TOKEN'),
                        "Content-Type": "application/json"
                    }
                });
                const result = await fetchPosts.json();
                
                if (fetchPosts.status === 200) {
                    setPostList(() => result);
                    
                }
                else {
                    throw new Error(result.error || "Failed to fetch feed")
                }
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
        <div>
            <h1>Feed</h1>
            {isLoading&&<GridLoader color="#ffffffff" />}
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <ul>
                {postList.map(e => <PostCard key={e.id} details={e} />)}
            </ul>
        </div>
    )
}

export default FeedPage