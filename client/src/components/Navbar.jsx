import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useState } from "react"
const Navbar = () => {
    let isLoggedIn = false

    if (Cookies.get("ACCESS_TOKEN")) {
        isLoggedIn = true
    }

    return (
        <nav className="tui-nav">
            <Link to="/feed" >Penguin</Link>
            {!isLoggedIn ? <div><Link to="/login" >Login</Link><Link to="/register" >Sign Up</Link>  </div>
                : <div> <Link onClick={() => {
                    Cookies.remove("ACCESS_TOKEN");
                    window.location.reload();
                }} to="/" >Log Out</Link>
                <Link to="/upload">Upload</Link>
                </div>}

        </nav>
    )
}

export default Navbar