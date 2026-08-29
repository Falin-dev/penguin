import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Component } from "react"
import Header from "./components/Header/"
import Login from "./components/Login/"
import UsersList from "./components/Users"
import Home from "./components/Home"
import "./index.css"
class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false}
  }
  toggleLogin=(status)=>{
    this.setState(()=>({isLoggedIn:status}))
  }
  render() {
    const {isLoggedIn} = this.state
    return (
      <BrowserRouter>
        <Header />
        <h1>PENGUIN</h1>
        <p>Welcome to the Penguin App</p>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login"  element={<Login toggleLogin={this.toggleLogin} />} />
          <Route exact path="/users" element={<UsersList isLoggedIn={isLoggedIn} />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
