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
                setImage(null);
                return
            }
            
        }
        catch (e) {
            console.log("eRROR: ",e )
            setErr(e)
        }
    }

    return (
        <div className="tui-page">
            <h1>Upload Post</h1>
            <form className="tui-form" onSubmit={uploadPost}>
                <label htmlFor="title">Title</label>
                <input name="title" onChange={(e) => handleTitle(e)} value={title} placeholder="Enter post title..." />
                
                <label htmlFor="content">Content</label>
                <textarea name="content" onChange={(e) => handleContent(e)} value={content} placeholder="What's on your mind?" />
                
                <label htmlFor="image">Attach Image (Optional)</label>
                <input name="image" onChange={e => handleImage(e)} type="file" />
                
                <button className="tui-button" type="submit">Upload Post</button>
                
                {message && <p className="tui-success">{message}</p>}
                {err && <p className="tui-error">{err}</p>}
            </form>
        </div>
    )
}

export default UploadPost