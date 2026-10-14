import pool from "../../config/database.js";


export const findAllUsers = async () => {
    const result = await pool.query(
        "SELECT username, name FROM users"
    );

    return result.rows;
};

export const updateProfile = async (profileObject)=>{
    const { username, newName, imageUrl } = profileObject
    const clauses = []
    const values = []
    let paramIndex = 1
    if (newName && newName.trim() !== "") {
        clauses.push(`name = $${paramIndex}`)
        values.push(newName)
        paramIndex++
    }
    if (imageUrl !== undefined && imageUrl !== null){
        clauses.push(`profile_picture_url = $${paramIndex}`)
        values.push(imageUrl)
        paramIndex++
    }
    if (clauses.length === 0) {
    return { message: "No fields provided for update" }
  }
    values.push(username)
    const query = `
    UPDATE users
    SET ${clauses.join(',')}
    WHERE username = $${paramIndex}

    RETURNING username, name, profile_picture_url
    `;
    const result = await pool.query(query,values)
    return result.rows[0]
}