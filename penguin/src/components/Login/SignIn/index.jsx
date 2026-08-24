import { Component } from "react";
import "./index.css"
import { use } from "react";
class SignIn extends Component {
    state = { username: "", password: "", prompt: "" }

    triggerDisplaySignUp = (displaySignUp) => {
        displaySignUp();
    }

    triggerSignIn = async (e, username, password, loginUser) => {
        e.preventDefault();
        const response = await loginUser(username, password)
        this.setState(() => ({ username: "", password: "", prompt: response }))
    }


    handleFields = (e) => {
        if (e.target.name === "username") {
            this.setState(() => ({ username: e.target.value }))
        }
        else {
            this.setState(() => ({ password: e.target.value }))
        }
    }

    render() {
        const { displaySignUp, loginUser } = this.props
        const { username, password, prompt } = this.state

        return (
            <form className="login-main" onSubmit={e => this.triggerSignIn(e, username, password, loginUser)} action="submit">
                <h1>Login</h1>
                <div className="form">
                    <label htmlFor="username">Username</label>
                    <input onChange={this.handleFields} name="username" id="username" placeholder="falin-dev" />
                    <br />
                    <label htmlFor="username">Password</label>
                    <input onChange={this.handleFields} name="password" id="password" placeholder="falin#*&100" />
                </div>
                {prompt && <p className="prompt">{prompt}</p>}
                <div className="button-pair">
                    <button onClick={e => this.triggerSignIn(e, username, password, loginUser)}>Login</button>
                    <button onClick={e => this.triggerDisplaySignUp(displaySignUp)} ><p>Create New Account</p></button>
                </div>
            </form>
        )
    }
}
export default SignIn