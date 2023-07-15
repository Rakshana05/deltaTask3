import { Link, Navigate } from "react-router-dom"
import { useState, useContext } from "react"
import { UserContext } from "../UserContext"

export default function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext)

    async function login(ev){
        ev.preventDefault()
        const response = await fetch('http://localhost:9000/',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'}
        })
        if (response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            }) 
        }else{
            alert("Wrong credentials")
        }
    }

    if (redirect) {
        return <Navigate to={'/home'} />
    }

    return (
        <div className="login">
            <div className="loginText">
                <h2>Login and continue to QuizzHub</h2>
            </div>
            <form className="loginForm" onSubmit={login}>
                <input name="username" type="text" placeholder="Username" onChange={ev => setUsername(ev.target.value)} value={username} />
                <input name="pasword" type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} value={password} />
                <button>Login</button>
            </form>
            <div className="loginFooter">
                <p>New to Quizz?</p>
                <Link to="/register" className="loginLink"><span>Register</span></Link>
            </div>
        </div>
    )
}