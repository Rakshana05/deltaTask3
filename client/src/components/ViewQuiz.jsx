import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function ViewQuiz(details){
    const [quizzes,setQuizzes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/viewquiz').then(response=>{
            response.json().then(quizzesList => {
                setQuizzes(quizzesList)
            })
        })        
    },[])

    function Entry(props) {
      return (
        <div className="term">
          <dt>
           
            {details.id===props.creator ? ( <><span className="quizName">
              {props.quizName}
            </span>
            <Link to={`/play/${props.id}`}>Play</Link>
            </>):""}
            
          </dt>
        </div>
      )
    }

    function showQuiz(quiz){
      return (
        <Entry key={quiz._id} 
        quizName={quiz.quizName}
        creator={quiz.user}
        id={quiz._id} />
      )
    }
    return(<div>
        <dl>{quizzes.map(showQuiz)}</dl>
    </div>)
}