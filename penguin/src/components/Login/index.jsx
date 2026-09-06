import { Component } from "react";
import {Navigate} from "react-router-dom"
import SignUp from "./SignUp/";
import SignIn from "./SignIn/"
import "./index.css"
import { v4 as uuidv4 } from 'uuid';

const backendDetails = {
    url:"http://localhost:3000/",
    login:"login/",
    addUser:"add-user/"

}
class Login extends Component {
    state = { loginPage: true, state:false }
    
    loginUser = async (username,password)=>{
        const loginUserDetails = JSON.stringify({
            username:username,
            password:password
        })

        const {url,login} = backendDetails
        const loginEndPoint = url+login;
        const loginUserRequest = await fetch(loginEndPoint, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:loginUserDetails
        })
        const responseData = await loginUserRequest.json();
        const responseMessage = responseData.response;
        const jwt = responseData.jwtToken
        if(responseMessage==="Login Successfull"){
            localStorage.setItem("penguin_jwt",jwt)
            this.props.toggleLogin(true,jwt)
        }
        else{
            this.props.toggleLogin(false)
        }
        return responseMessage;
    }

    addUser = async (username,password)=>{
        const newUserDetails = JSON.stringify({
            username:username,
            password:password
        });
        const addUserEndPoint = backendDetails.url+"add-user/"
        const addUserRequest = await fetch(addUserEndPoint,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: newUserDetails
        })
        const responseData = await addUserRequest.json();
        const responseMessage = responseData.response;
        if(responseMessage==="Login Successfull"){
            this.props.toggleLogin(true)
        }
        else{
            this.props.toggleLogin(false)
        }
        return responseMessage;
    }

    loginuser = async (username,password)=>{
        return "Hi User"
    }



    displaySignUp = () => {
        console.log("In Login")
        this.setState((prev) => ({ loginPage: !prev.loginPage }))
    }
    render() {
        const {loginPage} = this.state
        return (
            loginPage?<SignIn loginUser={this.loginUser} displaySignUp={this.displaySignUp}/>:<SignUp addUser={this.addUser} displaySignUp={this.displaySignUp}/>
        )
    }
}
export default Login