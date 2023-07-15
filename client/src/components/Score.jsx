import { Link } from "react-router-dom"
export default function Score(props){
    const {score,total} = props
    return (
        <div>
            <h2 className="resultHeading">Results</h2>
            <h4 className="resultScore">Your Score: {score}/{total}</h4>
            <Link className="endLink" to="/home">Back to home</Link>
        </div>
    )
}