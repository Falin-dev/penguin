import {getAllUsers, patchProfile} from "./user.service.js"
const getUsers = async (req , res ,next)=>{
    try{
        
        const result = await getAllUsers();
        res.json(result);
    }
    catch(error){
        next(error);
    }
}

const updateProfile = async(req,res,next)=>{
    try{
        const {username} = req.user
        const {newName} = req.body
        const imageFile = req.file
        const profileObject = {
            username,
            newName,
            imageFile : imageFile || null
        }
        const result = await patchProfile(profileObject)
        res.status(200).json({message:"Profile Image Updated"})
    }
    catch(error){
        next(error)
    }
}

export {getUsers, updateProfile}