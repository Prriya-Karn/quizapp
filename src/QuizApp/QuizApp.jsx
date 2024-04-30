import React from "react";
import { useState } from "react";
import {QuizData} from "./QuizData";
import QuizResult from "./QuizResult";

const QuizApp = ()=>{
    
      const[score,updateScore] = useState(0);
      const[showResult,showUpdateResult]= useState(false)
      const [data,updateData] = useState(0);
 
      const Next = ()=>{
      
          if(data === QuizData.length-1)
          {
            showUpdateResult(true);
            
          }
        else{
          updateData(data+1)
          showUpdateResult(false)
        }
      
       }
       var playAgain = ()=>{
       showUpdateResult(false)
       updateData(0)
       updateScore(0)
      }
      
      return(
        <>
        {(showResult === true?<><QuizResult score = {score}/>
        <button onClick={playAgain}>Play Again</button>
        </>
        :
       <div>
       <h1>{QuizData[data].question}</h1>
       
       {
        QuizData[data].option.map((e,index)=>{
          return(
            <>
         <br></br><br></br>
           
         <button onClick={() => {
          if(index === QuizData[data].answer)
          {
            
            updateScore(score+1)
            
            
          }
      
    }}>{e}</button>
          
            </>
            
          )
        })
       }
       <br></br><br></br>
       <button onClick={Next}>
       Next</button>
     
     
     </div> 
     )}
    </>
      )
    }
    


export default QuizApp;