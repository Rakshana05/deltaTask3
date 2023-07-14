import { useState,useEffect } from "react"


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
            <a href="/play">Play</a>
            <a href="/edit">Edit</a></>):""}
            
          </dt>
        </div>
      )
    }

    function showQuiz(quiz){
      return (
        <Entry key={quiz.id} 
        quizName={quiz.quizName}
        creator={quiz.user} />
      )
    }
    return(<div>
        <dl>{quizzes.map(showQuiz)}</dl>
    </div>)
}