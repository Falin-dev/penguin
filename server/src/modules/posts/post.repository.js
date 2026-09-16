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

export { getPosts }