import React from "react";



const Result = ({ result, questions }) => {
    const emoji = () => {
        if(result === questions.length) {
            return '😀'
        }else if(result < questions.length / 2){
            return '😕'
        }else if(result > questions.length / 2 && result < questions.length){
            return '😐'
        }else{
            return '😀'
        }
        
    }
    return (
        <div className="result">
            <h3><span className="emoji">🎉</span>Поздравляю!!!</h3>
            <p >Ваш результат:</p>
            <p>Правильно <b>{result}</b> из <b>{questions.length}</b> вопросов {emoji()}</p>
            <div className="reset-bt">
                <a href="/">Пройти снова</a>
            </div>
        </div>
    )
}


export default Result;