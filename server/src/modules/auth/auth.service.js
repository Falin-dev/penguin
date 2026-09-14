import { JWT_SECRET } from "../../config/env.js";
import { addUser, checkUserExistsence } from "./auth.repository.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const createUser = async (username, name, password, email, dob) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const addedUser = await addUser(username, name, hashedPassword, email, dob);

    return addedUser;
}

const validateUser = async (username, password) => {
    let result = {};
    async function issueJWT(payload, JWT_SECRET) {
        const token = await jwt.sign(payload, JWT_SECRET);
        return token;
    }
    const userDetails = await checkUserExistsence(username);

    if (!userDetails) {
        throw new Error("Username not found");
    }

    if (userDetails !== undefined) {
        const passwordHash = userDetails.password_hash;
        const isMatch = await bcrypt.compare(password, passwordHash);
        if (isMatch) {
            result = {
                message: "Login Success",
                jwtToken: await issueJWT({ username }, JWT_SECRET)
            }
        }
        else {
            throw new Error("Invalid Password")
        }
    }
    return result;
}

export { createUser, validateUser }