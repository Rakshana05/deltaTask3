import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Question from "./view/Question"
import Score from "./Score"

export default function Play(){
    const [quizInfo,setQuizInfo] = useState(null)
    const [currentDetails,setCurrentDetails] = useState({
        currentQuestion: 0,
        selectedOption: "",
        score: 0,
        quizEnd: false,
    })
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:9000/play/${id}`).then(response=>{
            response.json().then(quizInfo=>setQuizInfo(quizInfo))
        })
    },[])
    if(!quizInfo) return ""
    const questions = quizInfo.Questions

    function handleOptionChange(e) {
        setCurrentDetails(prev=>{
            return{
                currentQuestion: prev.currentQuestion,
                selectedOption: e.target.value,
                score: prev.score,
                quizEnd: prev.quizEnd,
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        //check answer
        if (currentDetails.selectedOption === questions[currentDetails.currentQuestion].ans){
            setCurrentDetails(prev=>{
                return{
                    currentQuestion: prev.currentQuestion,
                    selectedOption: prev.selectedOption,
                    score: prev.score+1,
                    quizEnd: prev.quizEnd,
                }
            })
        }
        //next question
        handleNextQuestion()
        
    }

    function handleNextQuestion(){
        if(currentDetails.currentQuestion +1 < questions.length) {
            setCurrentDetails(prev=>{
                return{
                    currentQuestion: prev.currentQuestion+1,
                    selectedOption: "",
                    score: prev.score,
                    quizEnd: prev.quizEnd,
                }
            })
        } else {
            setCurrentDetails(prev=>{
                return{
                    currentQuestion: prev.currentQuestion,
                    selectedOption: prev.selectedOption,
                    score: prev.score,
                    quizEnd: true,
                }
            })
        }

    }
    return(<div className="quizView">
        <h2 className="quizName">{(quizInfo.quizName).toUpperCase()}</h2>
        <hr className="hrStyle"/>
        {!currentDetails.quizEnd ? (
            <Question 
                question={questions[currentDetails.currentQuestion]}
                selectedOption={currentDetails.selectedOption}
                onOptionChange={handleOptionChange}
                onSubmit={handleSubmit}
        />
        ) : (
            <Score
                score={currentDetails.score}
                onNextQuestion={handleNextQuestion}
                total={questions.length}
            />
        )
        }
        
    </div>)
} 