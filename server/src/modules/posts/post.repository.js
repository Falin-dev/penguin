import pool from "../../config/database.js";

const getPosts = async (username) => {
    const query = `
    SELECT  u.name,p.id,p.title,p.image_url,p.content,p.posted_at, COUNT(l.post_id) as likes, EXISTS(
        SELECT 1
        FROM post_likes pl
        WHERE pl.post_id = p.id
        AND pl.liked_by = (SELECT id FROM users WHERE username=$1)
    ) AS is_liked_by_user
    FROM posts p
    INNER JOIN users u ON p.user_id = u.id
    LEFT JOIN post_likes l ON p.id = l.post_id
    group by u.name, 
    p.id, 
    p.title, 
    p.image_url, 
    p.content, 
    p.posted_at
    order by posted_at desc;
    `
    const result = await pool.query(query,[username]);
    return result;
}


const insertNewPost = async (postObject) => {
    const { username, title, content, image_url } = postObject
    const query = `
    INSERT INTO posts (user_id,title,image_url,content) 
    SELECT u.id,$1,$2,$3
    FROM users u 
    WHERE u.username = $4;
    `;

    const result = await pool.query(query, [title, image_url, content, username])
    return result;
}



const insertLike = async (postId, username) => {
    const query = `
    INSERT INTO post_likes (post_id,liked_by)
    SELECT $1,u.id
    from users u
    WHERE u.username = $2 
    `
    const result = await pool.query(query, [postId, username])
    return result
}

const deleteLike = async (postId, username) => {
    const query = `
    DELETE from post_likes 
    WHERE post_id = $1 AND liked_by = (
    SELECT id from users 
    WHERE username = $2
    );
    `
    const result = await pool.query(query,[postId,username])
    return result
}

export { getPosts, insertNewPost, insertLike, deleteLike }