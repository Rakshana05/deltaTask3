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
      console.log(details.id,props.creator,details.username)
      if(details.id===props.creator){
      return  (
        <dt className="quizTerm">
          <span>
            {props.quizName}
          </span>
          <Link className="playLink" to={`/play/${props.id}`}>Play</Link>
        </dt>
      )}
    }

    function showQuiz(quiz){
      return (
        <Entry key={quiz._id} 
        quizName={quiz.quizName}
        creator={quiz.user}
        id={quiz._id} />
      )
    }

    
    return(<div className="listView">
        <h3 className="listHeading">Quizzes of {details.username}</h3>
        <hr className="hrStyle"/>
        <dl className="listItems">{quizzes.map(showQuiz)}</dl>
    </div>)
}