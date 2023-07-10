import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="login">
      <div className="welcome" style={{ height: "30%" }}>
        <h2>Register and start to Quizz</h2>
      </div>
      <form className="loginForm" action="">
        <input
          
          name="username"
          type="text"
          placeholder="Username"
          value=""
        />
        <input
          
          name="password"
          type="password"
          placeholder="Password"
          value=""
        />
        <input
          
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value=""
        />
        <Link to="">Register</Link>
      </form>
      <div className="down">
        <p>
          Know Quizz?
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
    )
}