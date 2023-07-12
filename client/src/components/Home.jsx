import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom"
import { UserContext } from '../UserContext';

export default function Home(){
    const {setUserInfo,userInfo} = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:9000/home').then(response=>{
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })        
    },[])

    const username = userInfo?.username
    return username ? ( 
    <div className="home">
        <h2>Welcome {username}</h2>
        <Link to="/create">Create a quiz</Link>
        <Link to="/logout">Logout</Link>
    </div>) : (<div>User not registered</div>)
}