import { Link } from "react-router-dom"
import { useState } from "react"
export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  async function register(ev) {
    ev.preventDefault()
    const response = await fetch('http://localhost:9000/register',{
      method: 'POST',
      body: JSON.stringify({username,password,confirmpassword}),
      headers: {'Content-Type':'application/json'}
    })
    console.log(response)
    if(response.status === 200){
      alert('Registration Successful')
    }else{
      alert('Registration Failed')
    }
  }
  
  return (
    <div className="login">
    <div className="loginText">
      <h2>Register and start to QuizzHub</h2>
    </div>
    <form className="loginForm" onSubmit={register}>
      <input
        onChange={ev => setUsername(ev.target.value)}
        name="username"
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={ev => setPassword(ev.target.value)}
        name="password"
        type="password"
        placeholder="Password"
        value={password}
      />
      <input
        onChange={ev => setConfirmpassword(ev.target.value)}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={confirmpassword}
      />
      <button>Register</button>
    </form>
    <div className="loginFooter">
      <p>Know Quizz?</p>
      <Link to="/" className="loginLink">Login</Link>
    </div>
  </div>
  )
}