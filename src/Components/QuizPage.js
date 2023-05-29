import React, { useEffect, useState } from "react"
import Button from "./UI/Button";
import Option from "./UI/Option";
import './QuizPage.css'
import { Questions } from "./Questions";

const QuizPage = ({score, setScore, quizLength, weightage, updateScreen}) => {

  const [currentQuestionId, setCurrentQuestionId] = useState(Questions[Math.floor(Math.random()*(Questions.length-1))].id)
  const [usedQuestionIds, setUsedQuestionIds] = useState([currentQuestionId])
  const [selectedOption, setSelectedOption] = useState('');
  const [timer, setTimer] = useState(30);
  
  useEffect(() => {
    let intervalId = null;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else {
      handleNextOption();
    }
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [timer]);

  useEffect(() => {
    setTimer(30);
    // eslint-disable-next-line
  }, [currentQuestionId]);

  const handleAnswerClick = (optionId) => {
    setSelectedOption(optionId)
  };

  const currentQuestion = Questions.find((question) => {
    return currentQuestionId === question.id
  })
  const currentAnswer = currentQuestion.answer;

  const handleNextOption = () => {
    if (selectedOption === currentAnswer) {
      setScore(score + weightage);
    }
    setSelectedOption('');

    if (usedQuestionIds.length < quizLength) {
      const unusedQuestions = Questions.filter((el) => {
        return !usedQuestionIds.includes(el.id)
      })
      const nextQuestionId = unusedQuestions[Math.floor(Math.random()*(unusedQuestions.length - 1))].id;
      setCurrentQuestionId(nextQuestionId);
      setUsedQuestionIds([...usedQuestionIds, nextQuestionId])
    } else {
      updateScreen();
    }
  }

  return(
    <div className="quiz-page">
      <div className="question-sec">
        <h2>Question {usedQuestionIds.length}/{quizLength}</h2>
        <div className="timer">{timer} / 30 sec</div>
        <h3>{currentQuestion.question}</h3>
        <div className="options-sec">
          {currentQuestion.options.map((opt) => (
            <Option
              key={opt.id}
              text = {opt.option}
              isCorrect = {selectedOption === opt.id && selectedOption === currentAnswer}
              isWrong = {selectedOption === opt.id && selectedOption !== currentAnswer}
              isDisabled = {selectedOption.includes(currentQuestion.id)}
              onClick={() => handleAnswerClick(opt.id)}
            ></Option>
          ))}
        </div>
        <div className="next-sec">
          <Button 
            className="primary"
            text = {usedQuestionIds.length === quizLength ? 'Finish' : 'Next'}
            onClick={() => handleNextOption()}
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default QuizPage