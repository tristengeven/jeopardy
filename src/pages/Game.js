import React, { useEffect, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import themeSong from "../data/theme.mp3";

let importedCategories = require("../data/categories.json");
let importedQuestions = require("../data/questions.json");

let song = new Audio(themeSong);

export default function Game() {
  const [gameState, setGameState] = useState(""); // can be board, question, or answer
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState({});

  function songPlay() {
    song.play();
    setTimeout(() => {
      song.pause();
    }, 10000);
  }

  function songStop() {
    song.pause();
    song.currentTime = 0;
  }

  const handleQuestionClicked = (question) => {
    setActiveQuestion(question);
    setGameState("question");
    songPlay();
  };

  const toggleQuestionAsked = (question) => {
    let toggleValue = !question.asked;
    const updatedQuestions = questions.map((entry) => {
      if (
        entry.category === question.category &&
        entry.difficulty === question.difficulty
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
        <div className="bg-blue-800 h-screen overflow-y-hidden">
          <div className="text-white flex h-full">
            {categories.map((category) => {
              return (
                <div
                  className="flex flex-col flex-1"
                  key={`column_${category}`}
                >
                  <h1 className="text-center font-bold py-6 max-h-8 mb-8 lg:py-8 lg:text-2xl">
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
                          key={`question_${question.category}_${question.difficulty}`}
                        >
                          <button
                            className="h-full w-full"
                            onClick={() => handleQuestionClicked(question)}
                            disabled={question.asked}
                          >
                            <div
                              className={`text-yellow-200 font-bold lg:text-2xl border-2 border-black h-full w-full flex flex-col ${
                                question.asked === false
                                  ? "justify-center"
                                  : "justify-end"
                              } `}
                            >
                              {question.asked === false && (
                                <h1>{question.difficulty}</h1>
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
                songStop();
              }}
            >
              answer
            </button>
            <button
              className="border-2 border-white rounded-md px-5 py-1 mt-12 hover:bg-blue-600 text-white"
              onClick={() => {
                setGameState("board");
                songStop();
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
      return (
        <div className="bg-blue-800 h-screen overflow-hidden">
          <h1 className="text-white font-bold text-center text-6xl pt-24">
            Loading...
          </h1>
        </div>
      );
  }
}
