import { AuthContext } from "../../../context/AuthContext";
import { useState, useEffect, useRef, useContext } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

function ProfileDropDown() {
    const { user, setUser, setIsLoggedIn } = useContext(AuthContext)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (isProfileOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsProfileOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isProfileOpen])
    function logOut() {
        Cookies.remove("ACCESS_TOKEN")
        localStorage.removeItem("USER_DATA")
        setUser(null)
        setIsLoggedIn(false)
    }
    return (
        <div ref={menuRef} className="relative">
            <button
                className="tui-avatar-btn"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-label="User Profile"
            >
                <img src={user?.profilePicture} alt="Avatar" />
            </button>


            {isProfileOpen && (
                <div className="tui-dropdown shadow-lg">
                    <div className="tui-dropdown-header">
                        <img 
                            src={user?.profilePicture} 
                            alt="Avatar" 
                            className="tui-dropdown-avatar" 
                        />
                        <div className="tui-dropdown-info">
                            <p className="tui-dropdown-name">{user?.name || "User"}</p>
                            <p className="tui-dropdown-username">@{user?.username || "user"}</p>
                        </div>
                    </div>

                    <div className="tui-dropdown-divider"></div>

                    <span className="tui-dropdown-item disabled">
                        Settings
                    </span>

                    <Link
                        className="tui-dropdown-item"
                        to="/"
                        onClick={() => {
                            logOut();
                            setIsProfileOpen(false);
                        }}
                    >
                        Log Out
                    </Link>
                </div>
            )}
        </div>
    );

}

export default ProfileDropDown