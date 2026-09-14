import { findAllUsers } from "./user.repository.js";
const getAllUsers = async()=>{
    const users = await findAllUsers();
    return users
} 

export {getAllUsers}