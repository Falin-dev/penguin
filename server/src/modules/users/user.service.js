import  pool from "../../config/database.js";

const getAllUsers = async()=>{
    const result = await pool.query("SELECT username,name from users");
    return result
} 

export {getAllUsers}