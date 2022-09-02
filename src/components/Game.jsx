import React from "react";
import Result from "./Result";



const Game = ({questions, step, setStep, result, setResult}) => {
    if(questions.length === step){
        return <Result result = {result} questions = {questions}/>
    }
    return (
        <div className='game'>
            <div className='progress-bar'>
                <div className="progress" style={{width: `${Math.round(step / questions.length * 100)}%`}}></div>
            </div>
            <div className='quiz'>
                <h3>{questions[step].question}</h3>
                <ul className='answers'>
                    {questions[step].answers.map((obj, i) => (<li key={i} onClick={() => {setStep(step + 1); if(i === questions[step].correct){setResult(result + 1)}}} className='ansewr'>{obj}</li>))}
                    
                    
                </ul>
            </div>
        </div>
    )
}


export default Game;