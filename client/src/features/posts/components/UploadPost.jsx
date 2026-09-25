import { useState } from "react"
import Cookies from "js-cookie"
const UploadPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState('')
    const [err, setErr] = useState('');
    function handleTitle(e) {
        setTitle(() => e.target.value)
    }
    function handleContent(e) {
        setContent(() => e.target.value)
    }
    function handleImage(e) {
        setImage(e.target.files[0])
    }

    async function uploadPost(e) {

        e.preventDefault()

        try {
            const formData = new FormData()
            formData.append("title",title);
            formData.append("content",content);
            if(image){
                formData.append("image",image)
            }
            const fetchUpload = await fetch("http://localhost:3000/post/", {
                method: "POST",
                headers: {
                    Authorization: "Bearer "+Cookies.get("ACCESS_TOKEN")
                },
                body: formData
            });
            const response = await fetchUpload.json();
            if (fetchUpload.status === 201) {
                setMessage(response.message);
                setTitle('');
                setContent('');
                return
            }
            
        }
        catch (e) {
            console.log("eRROR: ",e )
            setErr(e)
        }
    }

    return (
        <form onSubmit={uploadPost}>
            <input onChange={(e) => handleTitle(e)} value={title} />
            <input onChange={(e) => handleContent(e)} value={content} />
            <input onChange={e => handleImage(e)} type="file" />
            {/* <input onChange={()=>handleImage} value={imageUrl} /> */}
            <button type="submit">Upload Post</button>
            {message||err?<p>{message}</p>:<p>{err}</p>}
        </form>
    )
}

export default UploadPost