import React, { useEffect, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";

let importedCategories = require("../data/categories.json");
let importedQuestions = require("../data/questions.json");

export default function Game() {
  const [gameState, setGameState] = useState(""); // can be board, question, or answer
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState({});

  const handleQuestionClicked = (question) => {
    setActiveQuestion(question);
    setGameState("question");
  };

  const toggleQuestionAsked = (question) => {
    let toggleValue = !question.asked;
    const updatedQuestions = questions.map((entry) => {
      if (
        entry.category === question.category &&
        entry.point_value === question.point_value
      )
        return { ...entry, asked: toggleValue };
      else {
        return entry;
      }
    });
    setQuestions(updatedQuestions);
  };

  useEffect(() => {
    setCategories(importedCategories);
    setQuestions(importedQuestions);
    setGameState("board");
  }, []);

  switch (gameState) {
    case "board":
      return (
        <div className="bg-blue-800 h-screen overflow-hidden">
          <div className="text-white flex h-full">
            {categories.map((category) => {
              return (
                <div
                  className="flex flex-col flex-1"
                  key={`column_${category}`}
                >
                  <h1 className="text-center py-8 font-bold text-2xl">
                    {category}
                  </h1>
                  {questions
                    .filter((entry) => {
                      return entry.category === category;
                    })
                    .map((question) => {
                      return (
                        <div
                          className="flex-1 max-h-28 md:max-h-full"
                          key={`question_${question.category}_${question.point_value}`}
                        >
                          <button
                            className="h-full w-full"
                            onClick={() => handleQuestionClicked(question)}
                            disabled={question.asked}
                          >
                            <div
                              className={`text-yellow-200 font-bold text-2xl border-2 border-black h-full w-full flex flex-col ${
                                question.asked === false
                                  ? "justify-center"
                                  : "justify-end"
                              } `}
                            >
                              {question.asked === false && (
                                <h1>{question.point_value}</h1>
                              )}
                              {question.asked === true && (
                                <button
                                  className="text-white text-lg self-end"
                                  onClick={() => toggleQuestionAsked(question)}
                                >
                                  <AiOutlineRollback />
                                </button>
                              )}
                            </div>
                          </button>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      ); // end game board
    case "question":
      return (
        <div className="bg-blue-800 h-screen overflow-hidden text-center flex flex-col justify-center gap-8">
          <div className="text-white text-bold text-3xl lg:text-5xl mt-16 max-w-[75%] mx-auto">
            {activeQuestion.question}
          </div>
          <div>
            <button
              className="border-2 border-white rounded-md px-5 py-1 mt-12 mr-4 hover:bg-blue-600 text-white"
              onClick={() => {
                setGameState("answer");
                toggleQuestionAsked(activeQuestion);
              }}
            >
              answer
            </button>
            <button
              className="border-2 border-white rounded-md px-5 py-1 mt-12 hover:bg-blue-600 text-white"
              onClick={() => {
                setGameState("board");
              }}
            >
              back to board
            </button>
          </div>
        </div>
      ); // end question board
    case "answer":
      return (
        <div className="bg-blue-800 h-screen overflow-hidden text-center flex flex-col justify-center gap-8">
          <div className="text-white text-bold text-3xl lg:text-5xl mt-16 max-w-[75%] mx-auto">
            {activeQuestion.answer}
          </div>
          <div>
            <button
              className="border-2 border-white rounded-md px-5 py-1 mt-12 hover:bg-blue-600 text-white"
              onClick={() => {
                setGameState("board");
              }}
            >
              back to board
            </button>
          </div>
        </div>
      ); // end question board
    default:
      return <div>Loading...</div>;
  }
}
