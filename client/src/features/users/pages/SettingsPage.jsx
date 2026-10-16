import { useState, useContext } from "react"
import { AuthContext } from "../../../context/AuthContext";
import { updateProfile } from "../../../services/user.services";
function SettingsPage() {
    const { user, setUser } = useContext(AuthContext)
    const profilePicture = user?.profilePicture
    const username = user?.username
    const name = user?.name

    const [newName, setNewName] = useState("");
    const [newProfilePicture, setNewProfilePicture] = useState(null)
    const [err, setErr] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        setErr('')
        setSuccessMsg('')

        try {
            const formData = new FormData();
            if (newName && newName.trim() !== "" && newName.length > 0) {
                formData.append("newName", newName);
            }
            if (newProfilePicture) {
                formData.append("profilePicture", newProfilePicture)
            }
            if (!(newName && newName.trim() !== "" && newName.length > 0) && !newProfilePicture) {
                setErr("No Change happened")
                console.log("no Change Hapenned")
                return
            }

            const fetchUpdateProfile = await updateProfile(formData)
            const { updatedUser, message } = await fetchUpdateProfile.json();

            if (fetchUpdateProfile.ok) {
                setNewName("")
                setNewProfilePicture(null)
                setSuccessMsg(message || "Profile updated successfully")
                setUser({
                    ...user,
                    name: updatedUser.name,
                    profilePicture: updatedUser.profilePicture
                })
                localStorage.setItem("USER_DATA", JSON.stringify(updatedUser))
            } else {
                setErr(message || "Failed to update profile")
            }

            
            console.log("After fetch")
        }
        catch (error) {
            console.log("Error: ", error)
            setErr(error.message || "An error occurred")
        }
    }



    function handleNewName(event) {
        setNewName(event.target.value)
    }

    function handleProfileImage(event) {
        setNewProfilePicture(event.target.files[0])
    }

    return (
        <div className="tui-page">
            <h1>Profile Settings</h1>

            <form className="tui-form" onSubmit={handleSubmit}>
                <div className="tui-settings-avatar-wrap">
                    <img 
                        className="tui-settings-avatar" 
                        src={newProfilePicture ? URL.createObjectURL(newProfilePicture) : profilePicture} 
                        alt="Profile" 
                    />
                </div>

                <label>Profile Picture</label>
                <div className="tui-file-row">
                    <input 
                        id="avatar-upload" 
                        className="tui-file-input" 
                        name="image" 
                        onChange={e => handleProfileImage(e)} 
                        type="file" 
                        accept="image/*" 
                    />
                    <label htmlFor="avatar-upload" className="tui-file-btn">
                        Change Profile
                    </label>
                    <span className="tui-file-name">
                        {newProfilePicture ? newProfilePicture.name : "No file chosen"}
                    </span>
                </div>

                <label htmlFor="new-name">Display Name</label>
                <input id="new-name" onChange={handleNewName} type="text" value={newName} placeholder={name || "Enter new name"} />

                <button className="tui-button" type="submit">Update</button>

                {successMsg && <p className="tui-success">{successMsg}</p>}
                {err && <p className="tui-error">{err}</p>}
            </form>
        </div>
    )
}

export default SettingsPage