import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom"
import { UserContext } from '../UserContext';
import Search from './SearchUser';

export default function Home(){
    const {userInfo,setUserInfo} = useContext(UserContext)
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
        <div className="homeNav">
        <h2 className="homeText">Welcome to QuizzHub <span style={{color:"white"}}>{username}</span></h2>
        <div className="homeLinks">
            <Link to="/create" className="homeLink">Create a quiz</Link>
            <Link to="/logout" className="homeLink">Logout</Link>
            </div>
        </div>
        <div className="homeSearch">
        <Search className="homeSearch"/> 
        </div>
    </div>) : (<div>User not registered</div>)
}