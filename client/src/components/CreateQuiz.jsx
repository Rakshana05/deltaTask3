import { useState } from "react"
import QuestionSet from "./create/Questionset"

export default function CreateQuiz() {
    const [quizName,setQuizName] = useState("")
    const QuestionArray = []
    for(let i=0;i<2;i++){
        QuestionArray.push(<QuestionSet key={i} />)
    }

    async function handleSubmit(ev){
        ev.preventDefault()
        let question = []
        const questions = []
        const no_qns = 2
        let n=1
        while(n<(6*no_qns)){
            questions.push({
                "qn":ev.target[n].value,
                "a":ev.target[n+1].value,
                "b":ev.target[n+2].value,
                "c":ev.target[n+3].value,
                "d":ev.target[n+4].value,
                "ans":ev.target[n+5].value
            })
            // questions.push(question)
            // question =[]
            n+=6
        }
        
        const details ={
            "quizName" : ev.target[0].value,
            "Questions" : questions
        }
        // console.log(details)
        const response = await fetch('http://localhost:9000/quiz',{
            method: 'POST',
            body: JSON.stringify(details),
            headers: {'Content-Type':'application/json'}
        })
        if(response.status === 200){
            alert('Quiz created Successfully')
        }else{
            alert('Quiz creation Failed. Check the answer field')
        }
    }

    return (<div>
        <h3>You can create 10 questions, with 4 options each</h3>
        {/* <button onClick={}>Add another question</button> */}
        
        <form onSubmit={handleSubmit} >
            <input type="text" name="quizName" value={quizName} onChange={ev=>setQuizName(ev.target.value)} placeholder="Quiz Name" />
            {QuestionArray}
            <button>Finish</button>
        </form>
    </div>)
}