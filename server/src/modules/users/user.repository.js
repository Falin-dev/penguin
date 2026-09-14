import pool from "../../config/database.js";

export const findAllUsers = async () => {
    const result = await pool.query(
        "SELECT username, name FROM users"
    );

    return result.rows;
};