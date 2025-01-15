"use client";

import React, { useState } from "react";

export default function QuizQuestion({ quiz }: { quiz: QuizQuestion }) {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [feedBackText, setFeedBackText] = useState<string>("");

  const handleOptionClick = (index: number) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const handleCheckAnswer = () => {
    let isCorrect = true;
    quiz.correctAnswerIndex.forEach((correctIndex) => {
      if (!selectedOptions.includes(correctIndex)) {
        isCorrect = false;
      }
    });
    if (selectedOptions.length !== quiz.correctAnswerIndex.length) {
      isCorrect = false;
    }

    if (isCorrect) {
      setFeedBackText("Correct Answer");
    } else {
      setFeedBackText("Incorrect Answer");
    }
  }

  const handleRemoveSelected = () => {
    setSelectedOptions([]);
    setFeedBackText("");
  }

  return (
    <div className="quiz_question_container">
      <h3>{quiz.question}</h3>
      <div className="quiz_options_container">
        {quiz.options.map((option, index) => (
          <div
            className={`quiz_option ${
              selectedOptions.includes(index) ? "selected" : ""
            }`}
            key={index}
            onClick={() => {
              handleOptionClick(index);
            }}
          >
            <div className="option_checkbox"></div>
            <p>{option}</p>
          </div>
        ))}
      </div>
      {selectedOptions.length > 0 && (
        <div className="check_answer_container">
          <button className="remove_button" onClick={() => {
            handleRemoveSelected();
          }}>Remove Selected</button>
          <button className="check_button" onClick={() => {
            handleCheckAnswer();
          }}>Check Answer</button>
        </div>
      )}
      {feedBackText != "" && (
        <div className="feedback_container">
          <p>{feedBackText}</p>
        </div>
      )}
    </div>
  );
}
