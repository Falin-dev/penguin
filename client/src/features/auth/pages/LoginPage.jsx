import { useState } from "react"
import { login } from "../../../services/auth.service";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom"

const LoginUser = () => {

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
        }
        catch (e) {
            setErrorMsg(() => e.message)
            setPrompt(() => "")
        }

    }

    console.log(errorMsg)

    return (
        <div>
            <h1>Login User</h1>
            <form onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input onChange={e => handleUsername(e)} name="username" value={username} />
                <label htmlFor="password" >Password</label>
                <input type="password" onChange={handlePassword} name="password" value={password} />
                <button type="submit">Log In</button>
            </form>

            {errorMsg && <p>{errorMsg}</p>}
            {prompt && <p>{prompt}</p>}

            <Link to="/register">
                <button type="button">New User?</button>
            </Link>
        </div>
    )
}

export default LoginUser