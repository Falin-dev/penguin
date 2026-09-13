import {getAllUsers} from "./user.service.js"
const getUsers = async (req , res)=>{

    const result = await getAllUsers();
    res.json(result.rows);
}

export {getUsers}