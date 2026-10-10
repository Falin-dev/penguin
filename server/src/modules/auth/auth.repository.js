import pool from "../../config/database.js"

const addUser = async (username, name, password_hash, email, dob) => {

    const addUserQuery = `
    INSERT INTO users (username,name,password_hash,email,dob) values(
    $1,$2,$3,$4,$5
);
    `
    const result = await pool.query(addUserQuery, [username, name, password_hash, email, dob])
    return result;

}

const checkUserExistsence = async (username) => {
    const query = `
    SELECT username,password_hash,name,profile_picture_url FROM users where username = $1
    `
    const result = await pool.query(query, [username]);
    console.log("Got")
    return result.rows[0];
}



export { addUser, checkUserExistsence }