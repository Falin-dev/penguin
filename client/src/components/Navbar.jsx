import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
const Navbar = () => {
    const {isLoggedIn, setIsLoggedIn} =  useContext(AuthContext)
    function logOut(){
        Cookies.remove("ACCESS_TOKEN")
        setIsLoggedIn(false)
    }
    return (
        <nav className="tui-nav">
            <Link to="/feed" >Penguin</Link>
            {!isLoggedIn ? <div><Link to="/login" >Login</Link><Link to="/register" >Sign Up</Link>  </div>
                : <div> <Link onClick={() => {
                    logOut()
                    
                }} to="/" >Log Out</Link>
                <Link to="/upload">Upload</Link>
                </div>}

        </nav>
    )
}

export default Navbar