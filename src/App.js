import React, { useState } from "react";
import Start from "./Components/Start";
import QuizPage from "./Components/QuizPage";
import Score from "./Components/Score";

const App = () => {
  const [screen, setScreen] = useState('start')
  const [score, setScore] = useState(0)
  
  const quizLength = 10
  const weightage = 10

  const handleRestartQuiz = () => {
    setScore(0)
    setScreen('quiz')
  }

  return(
    <div id="app">
      {screen === 'start' && (
        <Start updateScreen={() => setScreen('quiz')}></Start>
      )}
      {screen === 'quiz' && (
        <QuizPage 
          quizLength={quizLength}
          weightage={weightage}
          score={score}
          setScore={setScore}
          updateScreen={() => setScreen('score')}
        ></QuizPage>
      )}
      {screen === 'score' && (
        <Score 
          quizLength={quizLength}
          weightage={weightage}
          score={score}
          goToHome={() => setScreen('start')}
          handleRestartQuiz={handleRestartQuiz}
        ></Score>
      )}
    </div>
  )
}

export default App;