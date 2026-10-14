import { useState,useContext } from "react"
import { AuthContext } from "../../../context/AuthContext";
import { updateProfile } from "../../../services/user.services";
function SettingsPage(){
    const {user, setUser} = useContext(AuthContext)
    const {profilePicture,username,name} = user
    const[newName, setNewName] = useState("");
    const[newProfilePicture,setNewProfilePicture] = useState(null)
    const [err, setErr] = useState('');
    async function handleSubmit(event){
        event.preventDefault()
        try{
            const formData = new FormData();
            if(newName && newName.trim()!=="" && newName.length>0){
                formData.append("newName",newName);
            }
            if(newProfilePicture){
                formData.append("profilePicture",newProfilePicture)
            }
            if(!(newName && newName.trim()!=="" && newName.length>0)&&!newProfilePicture){
                setErr("No Change happened")
                console.log("no Change Hapenned")
                return
            }
            
            const fetchUpdateProfile = await updateProfile(formData)
            if (fetchUpdateProfile.status === 200){
                setNewName("")
                setNewProfilePicture(null)
            }
            const {updatedUser,message} = await fetchUpdateProfile.json();
            
            setUser({
                ...user,
                name : updatedUser.name,
                profilePicture : updatedUser.profilePicture
            })
            localStorage.setItem("USER_DATA", JSON.stringify(updatedUser))

            console.log("After fetch")
        }
        catch(error){
            console.log("Error: ",error)
            setErr(error)
        }
    }



    function handleNewName(event){
        setNewName(event.target.value)
    }

    function handleProfileImage(event){
        setNewProfilePicture(event.target.files[0])
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <img src={profilePicture}/>
                <input name="image" onChange={e => handleProfileImage(e)} type="file" accept="image/*"/>
                <input onChange={handleNewName} type="text" value = {newName}/>
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}

export default SettingsPage