import { Link } from "react-router-dom"
export default function Logout() {
    fetch('http://localhost:9000/logout',{
            method: 'POST',
    })
    return ( <div>
        <h3>You have logged out successfully</h3>
        <Link to="/">Click here to login</Link>
    </div>)
}