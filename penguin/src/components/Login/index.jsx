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
    
    loginUser = async (username,password)=>{
        return "hello";
    }

    addUser = async (username,password)=>{
        const newUserDetails = {
            username:username,
            password:password
        }
        const addUserEndPoint = backendDetails.url+"add-user/"
        const addUserRequest = await fetch(addUserEndPoint,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newUserDetails)
        })
        const responseData = await addUserRequest.json();
        const responseMessage = responseData.response;
        return responseMessage;
    }

    loginuser = async (username,password)=>{

    }



    displaySignUp = () => {
        console.log("In Login")
        this.setState((prev) => ({ loginPage: !prev.loginPage }))
    }
    render() {
        const {loginPage} = this.state
        console.log(loginPage)
        return (
            loginPage?<SignIn logInUser={this.loginUser} displaySignUp={this.displaySignUp}/>:<SignUp addUser={this.addUser} displaySignUp={this.displaySignUp}/>
        )
    }
}
export default Login