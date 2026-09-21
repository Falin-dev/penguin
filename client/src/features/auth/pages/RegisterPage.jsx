import { useState } from "react";
import { register } from "../../../services/auth.service";
import {Link, useNavigate} from "react-router-dom"
const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [prompt, setPrompt] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            await register(username, name, password, email, dob);
            setPrompt("Registration Successful! You can now log in.");
            setErrorMsg("");

            setUsername("");
            setPassword("");
            setEmail("");
            setName("");
            setDob("");
            
        } catch (e) {
            setErrorMsg(e.message);
            setPrompt("");
        }
    };

    return (
        <div className="tui-page">
            <h1>Register User</h1>
            <form className="tui-form" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input onChange={e => setUsername(e.target.value)} name="username" value={username} required />

                <label htmlFor="name">Name</label>
                <input onChange={e => setName(e.target.value)} name="name" value={name} required />

                <label htmlFor="email">Email</label>
                <input type="email" onChange={e => setEmail(e.target.value)} name="email" value={email} required />

                <label htmlFor="password">Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} name="password" value={password} required />

                <label htmlFor="dob">Date of Birth</label>
                <input type="date" onChange={e => setDob(e.target.value)} name="dob" value={dob} required />

                <button className="tui-button" type="submit">Register</button>
            </form>

            {errorMsg && <p className="tui-error">{errorMsg}</p>}
            {prompt && <p className="tui-success">{prompt}</p>}

            <Link className="tui-link" to="/login">
                <button className="tui-button" type="button">Existing User? Log In</button>
            </Link>
        </div>
    )
}

export default RegisterPage;