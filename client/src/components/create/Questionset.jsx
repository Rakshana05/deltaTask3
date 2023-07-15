import { useState } from "react"

export default function QuestionSet() {
    const [question,setQuestion] = useState("")
    const [opta,setOpta] = useState("")
    const [optb,setOptb] = useState("")
    const [optc,setOptc] = useState("")
    const [optd,setOptd] = useState("")
    const [ans,setAns] = useState("")
    return (
        <div className="questionSet">
            <input className="questionCreate" style={{width:"100%"}} type="text" placeholder="Question" onChange={ev=>setQuestion(ev.target.value)} value={question}/>
            <input className="questionCreate" type="text" placeholder="option a" onChange={ev=>setOpta(ev.target.value)} value={opta}/>
            <input className="questionCreate" type="text" placeholder="option b" onChange={ev=>setOptb(ev.target.value)} value={optb}/>
            <input className="questionCreate" type="text" placeholder="option c" onChange={ev=>setOptc(ev.target.value)} value={optc}/>
            <input className="questionCreate" type="text" placeholder="option d" onChange={ev=>setOptd(ev.target.value)} value={optd}/>
            <input className="questionCreate" type="text" placeholder="Answer" onChange={ev=>setAns(ev.target.value)} value={ans}/>
        </div>
    )
}