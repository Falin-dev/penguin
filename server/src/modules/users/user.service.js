import { findAllUsers, updateProfile } from "./user.repository.js";
import { SUPABASE_URL, SUPABASE_KEY } from "../../config/env.js";
import {createClient} from "@supabase/supabase-js"
const supabase = createClient(
    SUPABASE_URL, SUPABASE_KEY
)



const getAllUsers = async()=>{
    const users = await findAllUsers();
    return users
} 

const patchProfile = async(profileObject) =>{
    let imageUrl = null
    if(profileObject.imageFile){
        const fileName = `profile_${Date.now()}_${profileObject.imageFile.originalname}`
        const {data,error} = await supabase.storage.from('profile-picture').upload(fileName,profileObject.imageFile.buffer,{
            contentType: profileObject.imageFile.mimetype
        })
        if(error) throw error;
        const {data: urlData} = supabase.storage.from('profile-picture').getPublicUrl(fileName)
        imageUrl = urlData.publicUrl
    }
    profileObject["imageUrl"] = imageUrl
    delete profileObject.imageFile
    const updatedRow = await updateProfile(profileObject)
    return {
        username: updatedRow.username,
        name : updatedRow.name,
        profilePicture : updatedRow.profile_picture_url
    }
}

export {getAllUsers, patchProfile}