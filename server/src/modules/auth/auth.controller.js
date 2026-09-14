import {createUser} from "./auth.service.js"
import {validateUser} from "./auth.service.js"
const addUser = async (req , res, next)=>{
    try{
        const {username,name,password,email,dob} = req.body;

        const result = await createUser(username,name,password,email,dob);
        res.status(201).json({
            isUserAdded : "Added User Successfully",
        });
    }
    catch(error){
        next(error);
    }
}


const loginUser = async(req,res,next)=>{
    try{
        const {username,password} = req.body;
        const result = await validateUser(username,password);
        res.status(200).json(result);
    }
    catch(error){
        next(error);
    }
    
}

export {addUser,loginUser}