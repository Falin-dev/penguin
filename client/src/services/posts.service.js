import Cookies from "js-cookie"

const getFeedPosts = async () => {


    const fetchPosts = await fetch("http://localhost:3000/post/", {
        method: "GET",
        headers: {
            Authorization: "Bearer " + Cookies.get('ACCESS_TOKEN'),
            "Content-Type": "application/json"
        }
    });
    const result = await fetchPosts.json();

    if (fetchPosts.status === 200) {
        return result;

    }
    else {
        throw new Error(result.error || "Failed to fetch feed")
    }
}
export { getFeedPosts }