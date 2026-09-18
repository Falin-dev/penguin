const PostCard = (props)=>{
    const {details} = props
    const {name,title,content,image_url,posted_at} = details
    return(
        <li>
            <p>{name}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            {image_url&&<img src={image_url}/>}
            <p>{posted_at}</p>
        </li>

    )

}
export default PostCard