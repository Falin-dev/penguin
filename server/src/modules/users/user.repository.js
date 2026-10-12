import pool from "../../config/database.js";
import { updateProfile } from "./user.controller.js";

export const findAllUsers = async () => {
    const result = await pool.query(
        "SELECT username, name FROM users"
    );

    return result.rows;
};

export const updateProfile = async (profileObject){
    const { username, newName, imageUrl } = profileObject
    const clauses = []
    const paramIndex = 1
    if (newName !== undefined && newName !== null) {
        clauses.push(`name = $${paramIndex}`)
        paramIndex++
    }
    if (imageUrl !== undefined && imageUrl !== null){
        clauses.push(`profile_picture_url = $${paramIndex}`)
        paramIndex++
    }

    const query = `
    UPDATE users
    SET ${clauses}
    `
}