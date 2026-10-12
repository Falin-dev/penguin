import { findAllUsers, updateProfile } from "./user.repository.js";
import { SUPABASE_URL, SUPABASE_KEY } from "../../config/env.js";

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
        const {data,error} = await supabase.storage.from('profile-images').upload(fileName,profileObject,imageFile.buffer,{
            contentType: profileObject.imageFile.mimetype
        })
        if(error) throw error;
        const {data: urlData} = supabase.storage.from('profile-picture').getPublicUrl(fileName)
        imageUrl = urlData.publicUrl
    }
    profileObject["imageUrl"] = imageUrl
    delete profileObject.imageFile
    const result = await updateProfile(profileObject)
}

export {getAllUsers, patchProfile}