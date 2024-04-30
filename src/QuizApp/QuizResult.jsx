import {QuizData}  from "./QuizData";
const QuizResult = (props)=>{
    
    return(
        <>
        <h1>Total Score is 3</h1>
        <h1>{`Your score is ${props.score}`}</h1>
        {(props.score===QuizData.length?<h1>💐Congratulations</h1>:<h1>Keep Practice 👍, You can do it</h1>)}
        
        </>
    )
}

export default QuizResult;



