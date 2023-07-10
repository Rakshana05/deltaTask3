import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="login">
            <div className="welcome">
                <h2>Login and continue to Quizz</h2>
            </div>
            <form className="loginForm" action="">
                <input name="username" type="text" placeholder="Username" value="" />
                <input name="pasword" type="password" placeholder="Password" value="" />
                <Link to="">Login</Link>
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