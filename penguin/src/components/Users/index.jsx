import { Component } from "react"
import { Navigate } from "react-router-dom"
import Login from "../Login/"
import List from "./list"
const jwtToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZhbGluIiwiaWF0IjoxNzg3NzM2MTM0fQ.EOFn3EIB8bAjHGM1cNSr3l7QDrVOComXs4_SycTdW4Y"
const usersList = async function () {
    const listReq = await fetch("http://localhost:3000/all-users/", {
        method: "GET",
        headers: {
            Authorization: jwtToken,
            "Content-Type": "application/json",
        },
    });
    const listRes = await listReq.json();
    if (listReq.status === 200) {

        return listRes.data
    }
    else {

        throw new Error(listRes.response)
    }
}

class UsersList extends Component {
    state = { users: [], validUser: false, error: "", isLoading: true }

    deleteUser = async (id) => {
        const fetchDelete = await fetch(`http://localhost:3000/delete-user/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: jwtToken,
                "Content-Type": "application/json"
            },
        })
        const deleteResponse = await fetchDelete.json()
        console.log(deleteResponse)
    }
    render() {
        const { users, validUser, isLoading, error } = this.state
        if (isLoading) {
            return (<div>
                <p>Loading Users ...</p>
            </div>)
        }
        if (!isLoading && error) {
            return (<div>
                <p class="error-message">{error}</p>
            </div>)
        }
        return(
            users.map(e=>(<List key={e.id} deleteUser={this.deleteUser} userDetails={e} />))
        )
    }



    //<List key={e.id} deleteUser={this.deleteUser} userDetails={e} />

    async componentDidMount() {
        try {
            const users = await usersList();
            this.setState(() => ({ isLoading: false, users: users }))
        }
        catch (e) {
            console.log("Entered Catch:", e.message)
            this.setState(() => ({ isLoading: false, error: e.message }))
        }
    }
}
export default UsersList