import { Component } from "react"
import Login from "./components/Login/"
import "./index.css"
class App extends Component {
  render() {
    return (
      <div>
        <h1>PENGUIN</h1>
        <p>Welcome to the Penguin App</p>
        <Login />
      </div>
    )
  }
}

export default App
