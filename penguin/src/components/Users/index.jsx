import { useState, useEffect } from "react"
import { BeatLoader } from "react-spinners";


import { Navigate } from "react-router-dom"
import Login from "../Login/"
import List from "./list"
// const usersList = async function (jwtToken) {
//     const listReq = await fetch("http://localhost:3000/all-users/", {
//         method: "GET",
//         headers: {
//             Authorization: jwtToken,
//             "Content-Type": "application/json",
//         },
//     });
//     const listRes = await listReq.json();
//     if (listReq.status === 200) {

//         return listRes.data
//     }
//     else {

//         throw new Error(listRes.response)
//     }
// }

// class UsersList extends Component {
//     state = { users: [], validUser: false, error: "", isLoading: true }

//     deleteUser = async (id) => {
//         const fetchDelete = await fetch(`http://localhost:3000/delete-user/${id}`, {
//             method: "DELETE",
//             headers: {
//                 Authorization: jwtToken,
//                 "Content-Type": "application/json"
//             },
//         })
//         const deleteResponse = await fetchDelete.json()
//         console.log(deleteResponse)
//     }
//     render() {
//         const { users, validUser, isLoading, error } = this.state
//         if (isLoading) {
//             return (<div>
//                 <p>Loading Users ...</p>
//             </div>)
//         }
//         if (!isLoading && error) {
//             return (<div>
//                 <p class="error-message">{error}</p>
//             </div>)
//         }
//         return(
//             users.map(e=>(<List key={e.id} deleteUser={this.deleteUser} userDetails={e} />))
//         )
//     }



//     //<List key={e.id} deleteUser={this.deleteUser} userDetails={e} />

//     async componentDidMount() {
//         try {
//             console.log(this.props.jwtToken)
//             const users = await usersList(this.props.jwtToken);
//             this.setState(() => ({ isLoading: false, users: users }))
//         }
//         catch (e) {
//             console.log("Entered Catch:", e.message)
//             this.setState(() => ({ isLoading: false, error: e.message==="MISSING_JWT_TOKEN" ? "Login or Create New Account" :e.message  }))
//         }
//     }
// }
const UsersList = ({ jwtToken }) => {
    console.log(jwtToken)
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/all-users/", {
                    method: "GET",
                    headers: {
                        Authorization: jwtToken,
                        "Content-Type": "application/json",
                    },
                });
                const responseJson = await response.json();
                if (response.status === 200) {
                    setUsers(()=>[...responseJson.data])
                    setLoading(false)
                }
                else {

                    throw new Error(responseJson.response)
                }
            }
            catch (e) {

                setLoading(() => false);
                setError(e.message === "MISSING_JWT_TOKEN" ? "Login or Create a new Account" : e.message);
            }

        };
        fetchUsers();
    }, [])
    async function  deleteUser(id){
        try{
            const fetchDelete = await fetch(`http://localhost:3000/delete-user/${id}`,{
                method:"DELETE",
                headers : {
                    "Content-Type":"application/json",
                    Authorization : jwtToken
                }
            });
            const responseDelete = await fetchDelete.json();
            if(fetchDelete.status===200){
                setUsers((prev)=>[prev.filter(e=>e.id!==id)]);
            }
            else{
                throw new Error(responseDelete.response);
            }
        }
        catch(e){
            console.log(e.message)
        }
    }


    console.log(error)
    return (
        <div>
            <h1>Users</h1>
            {loading && <BeatLoader color="#ffffffff" />}
            {error && <p>{error}</p>}
            {users.map(e => <List key={e.id} userDetails={e} deleteUser = {deleteUser}/>)}
        </div>
    )
}
export default UsersList