import { Component } from "react"
import List from "./list"

const usersList = async function(){
    const listReq  = await fetch("http://localhost:3000/all-users/",{
        method:"GET",
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZhbGluIiwiaWF0IjoxNzg3NzM2MTM0fQ.EOFn3EIB8bAjHGM1cNSr3l7QDrVOComXs4_SycTdW4Y",
            "Content-Type": "application/json",
        },
    });
    const listRes = await listReq.json();
    return listRes.allUsers
}

class UsersList extends Component {
    state = {users:[]}

    deleteUser = async (id)=>{
        // const fetchDelete = await fetch("http://localhost:3000/delete-user") 
    }

    render() {
        const {users} = this.state
        console.log(users)
        return (
            <ul>
                {users.map(e=><List key={e.id} deleteUser={this.deleteUser} userDetails={e}/>)}
            </ul>
        )
    }
    async componentDidMount(){
        try{
            const data = await usersList()
            this.setState(()=>({users:data}))
        }
        catch (e){
            console.log(e.message)
        }
    }
}
export default UsersList