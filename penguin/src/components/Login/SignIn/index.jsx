import { Component } from "react";
import "./index.css"
class SignIn extends Component {
    triggerDisplaySignUp = (displaySignUp)=>{
        console.log("entered")
        displaySignUp();
    }

    render() {
        const {displaySignUp} = this.props
        return (
            <form className="login-main" onSubmit={e=>e.preventDefault()} action="submit">
            <h1>Login</h1>
            <div className="form">
                <label htmlFor="username">Username</label>
                <input name="username" id="username" placeholder="falin-dev" />
                <br />
                <label htmlFor="username">Password</label>
                <input name="password" id="password" placeholder="falin#*&100" />
            </div>
            <div className="button-pair">
                <button>Login</button>
                <button onClick={e=>this.triggerDisplaySignUp(displaySignUp)} ><p>Create New Account</p></button>
            </div>
        </form>
        )
    }
}
export default SignIn