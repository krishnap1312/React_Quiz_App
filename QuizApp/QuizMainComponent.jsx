import React, { useEffect, useState } from "react";
import './QuizApp.css'
const QuizMainComponent = () =>{
    
    const [QuizQuestion , SetQuizQuestion] = useState([])
    const [QuizCorrectAnswer , SetQuizCorrectAnswer] = useState([""])
    const [QuizColorAnswer , SetQuizColorAnswer] = useState([""])
    const [Count , SetCount] = useState(0)
    const [styleDisplay , SetstyleDisplay] = useState({"display":"none"})

    useEffect(()=>{      
        
        })

    async function fetchQuizData () {
        const response = await fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=medium');
        const data = await response.json();
        SetQuizQuestion(data.results);
        console.log(QuizQuestion)
      }
      
    const checkAnswerHandle = (event) =>{
        
        event.target.value==event.target.name? (SetQuizCorrectAnswer("correct Anwer")): (SetQuizCorrectAnswer("Wrong answer"))
        event.target.value==event.target.name? (SetstyleDisplay({"display" : "block"})) : SetstyleDisplay({"display":"none"})
        event.target.value==event.target.name? (SetQuizColorAnswer("bg-success p-1 fw-bolder text-white w-25 text-center me-0 container-fluid rounded round-5")): (SetQuizColorAnswer("bg-danger p-1 fw-bolder text-white w-25 text-center me-0 container-fluid rounded round-5"))
        event.target.value==event.target.name? (SetCount(Count+1)) : SetCount(Count)
        console.log(event.target.name);
        console.log(event.target.value);
        
    }


    return(
        <div className="container-fluid justify-content-center text-center">
            <div>

                <div className="container text-start">
                
                    {
                        QuizQuestion.map((item)=>
                            <div><h4>{item.question}</h4>
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><button className=" border-0 option-color" onClick={checkAnswerHandle} name={item.correct_answer} value={item.correct_answer}>a. {item.correct_answer} </button></td>
                                            <td><button className=" border-0 option-color" onClick={checkAnswerHandle} name={item.correct_answer} value={item.incorrect_answer}>b. {item.incorrect_answers[0]} </button></td>
                                        </tr>
                                        <tr>
                                            <td><button className=" border-0 option-color" onClick={checkAnswerHandle} name={item.correct_answer} value={item.incorrect_answer}>c. { item.incorrect_answers[1]} </button></td>
                                            <td><button className=" border-0 option-color" onClick={checkAnswerHandle} name={item.correct_answer} value={item.incorrect_answer}>d. {item.incorrect_answers[2]} </button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            

                        )
                    }
                                <h6 style={styleDisplay} className={QuizColorAnswer}>{QuizCorrectAnswer} {Count}</h6>
                </div>
                
                
            <button className="btn btn-primary" onClick={fetchQuizData}>Start Quiz</button>
                        
                    </div>
                </div>
          
    )
    } 

export default QuizMainComponent