import React from "react"
import Button from "./UI/Button"
import '../App.css'

const Start = ({updateScreen}) => {
  return(
    <div className="start-screen">
      <div className="quiz-title"> 
        <p className="quiz-title-text">QUIZ APP</p>
        <div className="quiz-logo"></div>
      </div>
      <Button
        className="primary"
        text={'Start Quiz'}
        onClick={updateScreen}
      ></Button>
    </div>
  )
}
export default Start;