import { Component } from "react"
import {Link} from "react-router-dom"
import "./index.css"
class Header extends Component {
    render() {
        return (
            <ul className="header">
                <li>
                    <Link className="nav-link"  to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link"  to="/users">Users</Link>
                </li>
                <li>
                    <Link className="nav-link"  to="/login">Login</Link>
                </li>
            </ul>

        )
    }
}
export default Header