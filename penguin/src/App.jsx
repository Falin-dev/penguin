import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Component } from "react"
import Header from "./components/Header/"
import Login from "./components/Login/"
import UsersList from "./components/Users"
import Home from "./components/Home"
import NotFound from "./components/NotFound/"
import "./index.css"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false, jwtToken:""}
  }
  toggleLogin=(status, token)=>{
    this.setState(()=>({isLoggedIn:status,jwtToken:"Bearer "+token}))
  }
  render() {
    const {isLoggedIn,jwtToken} = this.state
    return (
      <BrowserRouter>
        <Header />
        <h1>PENGUIN</h1>
        <p>Welcome to the Penguin App</p>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login"  element={<Login  toggleLogin={this.toggleLogin} />} />
          <Route exact path="/users" element={<UsersList jwtToken={jwtToken} isLoggedIn={isLoggedIn} />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
