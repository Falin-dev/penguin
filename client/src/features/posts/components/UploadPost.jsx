import { useState } from "react"
import Cookies from "js-cookie"
const UploadPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')
    const [err, setErr] = useState('');
    function handleTitle(e) {
        setTitle(() => e.target.value)
    }
    function handleContent(e) {
        setContent(() => e.target.value)
    }

    async function uploadPost(e) {
        
        try {
            console.log("Hello")
            const fetchUpload = await uploadPost("localhost:3000/post/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: Cookies.get("ACCESS_TOKEN")
                },
                body: JSON.stringify({
                    title: title,
                    content: content
                })
            });
            const response = await fetchUpload.json();
            if (fetchUpload.status === 201) {
                setMessage(response.message);
                return
            }
            setTitle('');
            setContent('');
        }
        catch (e) {
            console.log("eRROR: ",e )
            setErr(e)
        }
    }

    return (
        <form onSubmit={e=>uploadPost(e)}>
            <input onChange={(e) => handleTitle(e)} value={title} />
            <input onChange={(e) => handleContent(e)} value={content} />
            {/* <input onChange={()=>handleImage} value={imageUrl} /> */}
            <button type="submit">Upload Post</button>
            
        </form>
    )
}

export default UploadPost