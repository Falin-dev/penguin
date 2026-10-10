import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useContext, useState, useEffect, useRef } from "react"
import { AuthContext } from "../context/AuthContext"

const Navbar = () => {
    const menuRef = useRef(null);
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    useEffect(()=>{
        function handleClickOutside(event){
            if(isProfileOpen && menuRef.current && !menuRef.current.contains(event.target)){
                setIsProfileOpen(false)
            }
        }

        document.addEventListener("mousedown",handleClickOutside);
        return ()=>document.removeEventListener("mousedown",handleClickOutside)
    },[isProfileOpen])

    
    function logOut() {
        Cookies.remove("ACCESS_TOKEN")
        setIsLoggedIn(false)
    }

    return (
        <nav className="tui-nav sticky top-0 z-50 flex justify-between" style={{ backdropFilter: 'blur(8px)' }}>
            <Link to="/feed" className="tui-nav-logo">Penguin</Link>
            
            {!isLoggedIn && (
                <div className="1 gap-4">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            )}
            
            {isLoggedIn && (
                <div ref={menuRef} className="relative flex items-center gap-4">
                    <Link to="/upload">Post</Link>
                    <button className="tui-button" style={{ marginTop: 0 }} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        Profile ▾
                    </button>
                   
                    {isProfileOpen && (
                        <div className="tui-dropdown shadow-lg">
                            <div className="tui-dropdown-header">
                                <p className="tui-dropdown-name">Your Name</p>
                                <p className="tui-dropdown-username">@username</p>
                            </div>
        
                            <div className="tui-dropdown-divider"></div>
        
                            <span className="tui-dropdown-item disabled">
                                Settings
                            </span>
        
                            <Link className="tui-dropdown-item" onClick={() => {
                                logOut()
                                setIsProfileOpen(false) 
                            }} to="/">
                                Log Out
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar