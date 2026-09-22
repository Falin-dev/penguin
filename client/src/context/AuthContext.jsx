import { createContext, useState, useEffect } from "react"
import Cookies from "js-cookie"
const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        if(Cookies.get("ACCESS_TOKEN")){
            setIsLoggedIn(true)
        }
    },[]);
}

export { AuthContext }