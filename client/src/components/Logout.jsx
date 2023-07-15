import { Link } from "react-router-dom"
export default function Logout() {
    fetch('http://localhost:9000/logout',{
            method: 'POST',
    })
    return ( <div className="logoutView">
        <h3 className="logoutHeading">You have logged out successfully</h3>
        <hr className="hrStyle"/>
        <Link className="logoutLink" to="/">Click here to login</Link>
    </div>)
}