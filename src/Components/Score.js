import React from "react"
import Button from "./UI/Button"
import './Score.css'

const Score = ({handleRestartQuiz, goToHome, score, quizLength, weightage}) => {
  return(
    <div className="score-section">
      <h2>Your Score</h2>
      <div className="score2">
        <h1>{score}</h1> 
        <h4> / {quizLength*weightage}</h4>
      </div>
      <div className="score-btns">
        <Button 
          className="primary"
          onClick={handleRestartQuiz}
          text={'Restart Quiz'}          
        ></Button>
        <Button
          className="secondary"
          onClick={goToHome}
          text={'Go To Home'}
        ></Button>
      </div>
    </div>
  )
}

export default Score
