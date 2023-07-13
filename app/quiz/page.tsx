"use client";

import { useState } from "react";
import { quiz } from "../data";

const QuizPage = () => {
  const [activeQ, setActiveQ] = useState(0);
  const [selectedAns, setSelectedAns] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnsIdx, setSelectedAnsIdx] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQ];

  // check answer
  const onAnsSelected = (answer: any, idx: any) => {
    setChecked(true);
    setSelectedAnsIdx(idx);
    if (answer === correctAnswer) {
      setSelectedAns(true);
      console.log("true");
    } else {
      setSelectedAns(false);
      console.log("false");
    }
  };

  // cal score and increment
  const nextQuestion = () => {
    setSelectedAnsIdx(null);
    setResult((prev) =>
      selectedAns
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQ !== questions.length - 1) {
      setActiveQ((prev) => prev + 1);
    } else {
      setActiveQ(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold">Quiz Page</h1>
      <div>
        <h2 className="text-slate-400">
          Question: {showResult ? questions.length : activeQ + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quizContainer">
            <h3 className="text-black text-3xl font-semibold">
              {questions[activeQ].question}
            </h3>
            {answers.map((ans, idx) => (
              <li
                className={
                  selectedAnsIdx === idx ? "li liSelected" : "li li:hover"
                }
                key={idx}
                onClick={() => onAnsSelected(ans, idx)}
              >
                <span>{ans}</span>
              </li>
            ))}
            {checked ? (
              <button
                onClick={nextQuestion}
                className="px-4 py-2 mt-3 text-xl rounded cursor-pointer bg-slate-700 text-slate-200"
              >
                {activeQ === question.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled
                className="px-4 py-2 mt-3 text-xl rounded cursor-pointer bg-slate-400"
              >
                {activeQ === question.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="quizContainer">
            <h3 className="text-2xl text-black font-semibold">Results</h3>
            <h3 className="text-xl text-slate-800 font-semibold">
              Overall {(result.score / (questions.length * 5)) * 100}%
            </h3>
            <p className="result mt-4">
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className="result">
              Total Score: <span>{result.score}</span>
            </p>
            <p className="result">
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className="result">
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button
              className="bg-slate-950 p-2 rounded mt-2"
              onClick={() => window.location.reload()}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
