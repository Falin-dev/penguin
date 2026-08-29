import {Component} from "react"
import "./index.css"
class List extends Component{
    triggerDeleteUser = (deleteUser,id)=>{

        deleteUser(id)
    }
    render(){
        const {userDetails,deleteUser} = this.props
        const {id,username} = userDetails
        return(
            <li className="user-list">
                <h3>{username}</h3>
                <button onClick={e=>this.triggerDeleteUser(deleteUser,id)}>Delete</button>
            </li>
        )
    }
}
export default List