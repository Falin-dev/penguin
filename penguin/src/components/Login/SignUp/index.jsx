import { Component, use } from "react";
import "./index.css"

class SignUp extends Component {
    state = {username:"", password:"", prompt:""}

    submitForm = async (e,addUser,username,password)=>{
        e.preventDefault();
        const response = await addUser(username,password)
        this.setState(()=>({username:"",password:"",prompt:response}))
    }

    handleUsername = (e)=>{        
        if(e.target.name==="username"){
            this.setState(()=>({username:e.target.value}))
        }
        else if(e.target.name==="password"){
            this.setState(()=>({password:e.target.value}))
        }

    }

    render() {
        const {username,password, prompt} = this.state
        const { displaySignUp, addUser } = this.props
        return (
            <form className="login-main" onSubmit={e => this.submitForm(e,addUser,username,password)} action="submit">
                <h1>Sign Up</h1>
                <div className="form">
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" value={username} onChange={this.handleUsername} placeholder="falin-dev" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" value={password} onChange={this.handleUsername} placeholder="falin#*&100" />
                </div>
                {prompt&&<p className="prompt">{prompt}</p>}
                <div className="button-pair">
                    <button >Create</button>
                    <button onClick={e => this.triggerDisplaySignUp(displaySignUp)}><p>Alreay have an Account</p></button>
                </div>
            </form>
        )
    }
}
export default SignUp