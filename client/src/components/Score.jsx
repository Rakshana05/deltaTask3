import { Link } from "react-router-dom"
export default function Score(props){
    const {score,total} = props
    return (
        <div>
            <h2>Results</h2>
            <h4>Your Score: {score}/{total}</h4>
            <Link to="/home">Back to home</Link>
        </div>
    )
}