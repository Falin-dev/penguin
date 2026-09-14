import {getAllUsers} from "./user.service.js"
const getUsers = async (req , res)=>{
    try{
        const result = await getAllUsers();
        res.json(result);
    }
    catch(error){
        next(error);
    }
}

export {getUsers}