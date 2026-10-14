import {api} from "./api"
import Cookies from "js-cookie"
async function updateProfile(formData){
    const fetchUpdateProfile = await fetch("http://localhost:3000/user/profile",{
        method:"PATCH",
        headers :{
            Authorization : "Bearer "+Cookies.get("ACCESS_TOKEN")
        },
        body : formData
    })
    return fetchUpdateProfile
}
export {updateProfile}