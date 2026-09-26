import pool from "../../config/database.js";

const getPosts = async () => {
    const query = `
    SELECT  u.name,p.id,p.title,p.image_url,p.content,p.posted_at
    FROM posts p
    INNER JOIN users u ON p.user_id = u.id
    order by posted_at desc limit 10;
    `
    const result = await pool.query(query);
    return result;
}


const insertNewPost = async(postObject) =>{
    const {username,title,content,image_url} = postObject
    const query  = `
    INSERT INTO posts (user_id,title,image_url,content) 
    SELECT u.id,$1,$2,$3
    FROM users u 
    WHERE u.username = $4;
    `;
    const result = await pool.query(query,[title,image_url,content,username])
    return result;
}

export { getPosts, insertNewPost }