import { createContext, useState, useEffect } from "react"
import Cookies from "js-cookie"
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("ACCESS_TOKEN"));
    const [user,setUser] = useState(()=>{
        const savedUser = localStorage.getItem("USER_DATA");
        return savedUser?JSON.parse(savedUser):null;
    });


    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext }