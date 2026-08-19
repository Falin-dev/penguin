import { Component } from "react";
import SignUp from "./SignUp/";
import SignIn from "./SignIn/"
import "./index.css"
import { v4 as uuidv4 } from 'uuid';
const userDetails = [
    {
        id:uuidv4(),
        username:"Falin-dev",
        password:"falin"
    }
]
const backendDetails = {
    url:"http://localhost:3000/",

}
class Login extends Component {
    state = { loginPage: true }
    
    addUser = async (username,password)=>{
        // const newUser = {
        //     id: uuidv4(),
        //     username:username,
        //     password:password,
        // }
        // userDetails.push(newUser)
        // console.log("New User Created")
        // console.log(userDetails)
        const newUserDetails = {
            username:username,
            password:password
        }
        const endPoint = backendDetails.url+"add-user/"
        const addUserRequest = await fetch(endPoint,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newUserDetails)
        })
    }

    displaySignUp = () => {
        console.log("In Login")
        this.setState((prev) => ({ loginPage: !prev.loginPage }))
    }
    render() {
        const {loginPage} = this.state
        console.log(loginPage)
        return (
            loginPage?<SignIn displaySignUp={this.displaySignUp}/>:<SignUp addUser={this.addUser} displaySignUp={this.displaySignUp}/>
        )
    }
}
export default Login