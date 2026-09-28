import { createContext, useState, useEffect } from "react"
import Cookies from "js-cookie"
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("ACCESS_TOKEN"));


    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext }