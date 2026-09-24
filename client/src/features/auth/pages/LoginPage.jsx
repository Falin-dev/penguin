import { useContext, useState } from "react"
import { login } from "../../../services/auth.service";
import Cookies from 'js-cookie'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext";

const LoginUser = () => {
    const nav = useNavigate();
    const {setIsLoggedIn} = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [prompt, setPrompt] = useState("");

    const handleUsername = (e) => {
        const input = e.target.value
        setUsername(input)

    }
    const handlePassword = (e) => {
        const input = e.target.value
        setPassword(input)
    }

    const submit = async (e) => {
        e.preventDefault()
        //Login Function
        try {

            const result = await login(username, password);
            const jwtToken = result.jwtToken
            setUsername(() => "")
            setPassword(() => "")
            setPrompt(() => "Login Success")
            setErrorMsg(() => "")
            Cookies.set('ACCESS_TOKEN', jwtToken, { expires: 1 })
            setIsLoggedIn(true)
            nav("/feed")
        }
        catch (e) {
            setErrorMsg(() => e.message)
            setPrompt(() => "")
        }

    }

    console.log(errorMsg)

    return (
        <div className="tui-page">
            <h1>Login User</h1>
            <form className="tui-form" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input onChange={e => handleUsername(e)} name="username" value={username} />
                <label htmlFor="password" >Password</label>
                <input type="password" onChange={handlePassword} name="password" value={password} />
                <button className="tui-button" type="submit">Log In</button>
            </form>

            {errorMsg && <p className="tui-error">{errorMsg}</p>}
            {prompt && <p className="tui-success">{prompt}</p>}

            
            <Link className="tui-link" to="/register">
                <button className="tui-button" type="button">New User?</button>
            </Link>
        </div>
    )
}

export default LoginUser