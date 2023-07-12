import { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom"

export default function Home(){
    const [username,setUsername] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:9000/home').then(response=>{
            response.json().then(userInfo => {
                setUsername(userInfo.username)
            })
        })        
    },[])
 
    function logout() {
        fetch('http://localhost:9000/logout',{
            method: 'POST',
        })
        return <Navigate to={'/logout'} />
    }
    
    return username ? ( 
    <div className="home">
        <h2>Welcome {username}</h2>
        <Link to="/create">Create a quiz</Link>
        <Link to="/logout">Logout</Link>
    </div>) : (<div>User not registered</div>)
}