import React from "react";

import './Option.css';

const Button = ({text, onClick, isCorrect, isWrong, isDisabled}) => {
  return (
    <button
      className={isCorrect ? "option correct" : isWrong ? "option wrong" : "option"}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;