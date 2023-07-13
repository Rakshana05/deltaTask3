import { useState } from "react"

export default function QuestionSet() {
    const [question,setQuestion] = useState("")
    const [opta,setOpta] = useState("")
    const [optb,setOptb] = useState("")
    const [optc,setOptc] = useState("")
    const [optd,setOptd] = useState("")
    const [ans,setAns] = useState("")
    return (
        <div style={{margin: "10px"}}>
            <input type="text" placeholder="Question" onChange={ev=>setQuestion(ev.target.value)} value={question}/>
            <input type="text" placeholder="option a" onChange={ev=>setOpta(ev.target.value)} value={opta}/>
            <input type="text" placeholder="option b" onChange={ev=>setOptb(ev.target.value)} value={optb}/>
            <input type="text" placeholder="option c" onChange={ev=>setOptc(ev.target.value)} value={optc}/>
            <input type="text" placeholder="option d" onChange={ev=>setOptd(ev.target.value)} value={optd}/>
            <input type="text" placeholder="Answer" onChange={ev=>setAns(ev.target.value)} value={ans}/>
        </div>
    )
}