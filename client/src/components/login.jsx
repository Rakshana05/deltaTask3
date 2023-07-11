import { Link } from "react-router-dom"
import { useState } from "react"

export default function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    async function login(ev){
        ev.preventDefault()
        await fetch('http://localhost:9000/',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'}
         })
    }
    return (
        <div className="login">
            <div className="welcome">
                <h2>Login and continue to Quizz</h2>
            </div>
            <form className="loginForm" onSubmit={login}>
                <input name="username" type="text" placeholder="Username" onChange={ev => setUsername(ev.target.value)} value={username} />
                <input name="pasword" type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} value={password} />
                <button>Login</button>
            </form>
            <div className="down">
                <p>
                New to Quizz?
                <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    )
}