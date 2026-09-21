const PostCard = (props)=>{
    const {details} = props
    const {name,title,content,image_url,posted_at} = details
    return(
        <li className="tui-post-card">
            <div className="tui-post-meta">
                <span className="tui-post-author">{name}</span>
                <span>{posted_at}</span>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            {image_url&&<img src={image_url}/>}
        </li>

    )

}
export default PostCard