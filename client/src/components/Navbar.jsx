import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    function logOut() {
        Cookies.remove("ACCESS_TOKEN")
        setIsLoggedIn(false)
    }

    return (
        <nav className="tui-nav  sticky top-0 w-full bg-white/80">
            <Link to="/feed" >Penguin</Link>
            {!isLoggedIn && <div><Link to="/login" >Login</Link><Link to="/register" >Sign Up</Link>  </div>
            }
            {isLoggedIn && <div>
                <Link to="/upload">Post</Link>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)}>Profile</button>
            </div>}


            {isProfileOpen && (
                <div className="absolute right-0 top-10 w-48 bg-[#0c0f17] border border-[#1e293b] p-4 flex flex-col items-start gap-3 shadow-lg z-50">
                    <div>
                        <p className="text-white font-bold">Your Name</p>
                        <p className="text-sm text-gray-400">@username</p>
                    </div>


                    <div className="w-full h-px bg-[#1e293b]"></div>


                    <span className="text-gray-600 cursor-not-allowed text-sm">
                        [ Settings ]
                    </span>

                    <Link onClick={() => {
                        logOut()
                        setIsProfileOpen(false) // Close menu on logout
                    }} to="/">
                        Log Out
                    </Link>
                </div>
            )}

        </nav >
    )
}

export default Navbar