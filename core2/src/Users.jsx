import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Users(){

    const [users,setUser] = useState([]);

    useEffect(()=>{


        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))

    },[])


    const teamStyle ={
        border: '4px solid orange',
        margin: '15px',
        borderRadius: '20px'
    }
    return(
        <div style={teamStyle}>
            <h3>Users: {users.length} </h3>
            {
                users.map(friend => <Friend friend={friend}>

                </Friend>)
            }
        </div>
    )
}