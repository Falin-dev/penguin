import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import ProfileDropDown from "../features/auth/components/ProfileDropDown"

const Navbar = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <nav className="tui-nav sticky top-0 z-50 flex justify-between" style={{ backdropFilter: 'blur(8px)' }}>
            <Link to="/feed" className="tui-nav-logo">Penguin</Link>

            {!isLoggedIn && (
                <div className="tui-nav-actions">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            )}
            {isLoggedIn && (
                <div className="tui-nav-actions">
                    <Link to="/upload">Post</Link>
                    <ProfileDropDown />
                </div>
            )}
            
            
        </nav>
    )
}

export default Navbar