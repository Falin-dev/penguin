import {Link} from "react-router-dom"
const Navbar = ()=>{
    return(
        <nav>
            <Link to="/" >Penguin</Link>
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
        </nav>
    )
}

export default Navbar