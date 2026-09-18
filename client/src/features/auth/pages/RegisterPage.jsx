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
        <div>
            <h1>Register User</h1>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
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

                <button type="submit" style={{ marginTop: "10px" }}>Register</button>
            </form>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            {prompt && <p style={{ color: "green" }}>{prompt}</p>}

            <Link to="/login">
                <button style={{ marginTop: "20px" }}>Existing User? Log In</button>
            </Link>
        </div>
    )
}

export default RegisterPage;