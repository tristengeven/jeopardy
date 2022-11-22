import React, { useEffect, useState } from "react";

export default function Game() {
  const [gameState, setGameState] = useState(""); // can be board, question, or answer
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState({});

  const handleQuestionClicked = (question) => {
    setActiveQuestion(question);
    setGameState("question");
  };

  const changeQuestionToAsked = (question) => {
    console.log(question);

    const updatedQuestions = questions.map((entry) => {
      if (
        entry.category === question.category &&
        entry.point_value === question.point_value
      )
        return { ...entry, asked: true };
      else {
        return entry;
      }
    });
    setQuestions(updatedQuestions);
  };

  useEffect(() => {
    setCategories([
      "Bible",
      "Sports",
      "Geography",
      "Pop Culture",
      "Brands",
      "six",
    ]);
    setGameState("board");
    setQuestions([
      {
        category: "Bible",
        question: "This animal tempted Adam and Eve in the Garden of Eden",
        answer: "Snake",
        point_value: "Very Easy",
        asked: false,
      },
      {
        category: "Bible",
        question: "This part of Adam's body was used to create Eve",
        answer: "His rib",
        point_value: "Easy",
        asked: false,
      },
      {
        category: "Bible",
        question: "This many people were on Noah's Ark",
        answer: "8",
        point_value: "Medium",
        asked: false,
      },
      {
        category: "Bible",
        question: "This person baptised Jesus",
        answer: "John the Baptist",
        point_value: "Kinda Hard",
        asked: false,
      },

      {
        category: "Bible",
        question: "The Old Testament was written in this language",
        answer: "Hebrew",
        point_value: "Hard",
        asked: false,
      },
      {
        category: "Bible",
        question:
          "This garden is where Jesus went to pray after the last supper",
        answer: "The Garden of Gethsemane",
        point_value: "Very Hard",
        asked: false,
      },
      {
        category: "Bible",
        question:
          "This is where Jesus was found 40 days after His resurrection",
        answer: "Heaven",
        point_value: "Super Duper Hard",
        asked: false,
      },
      {
        category: "Sports",
        question: "This shot is taken after a foul in basketball",
        answer: "Free Throw",
        point_value: "Very Easy",
        asked: false,
      },
      {
        category: "Sports",
        question: "This man is known as the GOAT",
        answer: "Tom Brady",
        point_value: "Easy",
        asked: false,
      },
      {
        category: "Sports",
        question: "This many innings are in a Major League Baseball game",
        answer: "9",
        point_value: "Medium",
        asked: false,
      },
      {
        category: "Sports",
        question: "This team won the 2022 Super Bowl",
        answer: "Los Angeles Rams",
        point_value: "Kinda Hard",
        asked: false,
      },
      {
        category: "Sports",
        question:
          "This olympic sport involves players sliding stones on a sheet of ice toward a target area which is segmented into four concentric circles",
        answer: "Curling",
        point_value: "Hard",
        asked: false,
      },
      {
        category: "Sports",
        question:
          "This Arkansas player was taken 18th overall in the 2022 NFL draft",
        answer: "Treylon Burks",
        point_value: "Very Hard",
        asked: false,
      },
      {
        category: "Sports",
        question: "This used to be outlawed in NCAA Basketball pregame warmups",
        answer: "Dunking",
        point_value: "Super Duper Hard",
        asked: false,
      },
      {
        category: "Geography",
        question: "This is the capital city of Mexico",
        answer: "Mexico City",
        point_value: "Very Easy",
        asked: false,
      },
      {
        category: "Geography",
        question: "This is the tallest mountain on Earth",
        answer: "Mt. Everest",
        point_value: "Easy",
        asked: false,
      },
      {
        category: "Geography",
        question:
          "This US state features a rock sculpture of 4 past presidents",
        answer: "South Dakota",
        point_value: "Medium",
        asked: false,
      },
      {
        category: "Geography",
        question: "This is the 3rd largest US State",
        answer: "California",
        point_value: "Kinda Hard",
        asked: false,
      },
      {
        category: "Geography",
        question: "This is the largest desert on Earth",
        answer: "Antarctica",
        point_value: "Hard",
        asked: false,
      },
      {
        category: "Geography",
        question: "This country used to own Louisiana",
        answer: "France",
        point_value: "Very Hard",
        asked: false,
      },
      {
        category: "Geography",
        question: "This is the smallest country in the world",
        answer: "Vatican City",
        point_value: "Super Duper Hard",
        asked: false,
      },
      {
        category: "Pop Culture",
        question: "what is 11?",
        answer: "11",
        point_value: "Very Easy",
        asked: false,
      },
      {
        category: "Pop Culture",
        question: "what is 22?",
        answer: "22",
        point_value: "Easy",
        asked: false,
      },
      {
        category: "Pop Culture",
        question: "what is 33?",
        answer: "33",
        point_value: "Medium",
        asked: false,
      },
      {
        category: "Pop Culture",
        question: "what is 44?",
        answer: "44",
        point_value: "Kinda Hard",
        asked: false,
      },
      {
        category: "Pop Culture",
        question: "what is 55?",
        answer: "55",
        point_value: "Hard",
        asked: false,
      },
      {
        category: "Brand Names",
        question:
          "Trump tried to ban this Chinese video sharing social network",
        answer: "TikTok",
        point_value: "Very Easy",
        asked: false,
      },
      {
        category: "Brand Names",
        question: "This fast food chain's slogan is - I'm Lovin' It -",
        answer: "McDonald's",
        point_value: "Easy",
        asked: false,
      },
      {
        category: "Brand Names",
        question: "This type of product is made by Fenty",
        answer: "Makeup/Beauty Products",
        point_value: "Medium",
        asked: false,
      },
      {
        category: "Brand Names",
        question: "This extremly popular game's name also mean 14 days",
        answer: "Fortnite",
        point_value: "Kinda Hard",
        asked: false,
      },

      {
        category: "Brand Names",
        question: "This is the fast-food restaurant with the most locations",
        answer: "Subway",
        point_value: "Hard",
        asked: false,
      },
      {
        category: "Brand Names",
        question: "Chevrolet and GMC are both made by this company",
        answer: "GM(General Motors)",
        point_value: "Very Hard",
        asked: false,
      },
      {
        category: "Brand Names",
        question: "This is the state in which Chick-Fil-A was founded.",
        answer: "Georgia",
        point_value: "Super Duper Hard",
        asked: false,
      },
      {
        category: "six",
        question: "what is 1111?",
        answer: "1111",
        point_value: "Very Easy",
        asked: false,
      },
      {
        category: "six",
        question: "what is 2222?",
        answer: "2222",
        point_value: "Easy",
        asked: false,
      },
      {
        category: "six",
        question: "what is 3333?",
        answer: "3333",
        point_value: "Medium",
        asked: false,
      },
      {
        category: "six",
        question: "what is 4444?",
        answer: "4444",
        point_value: "Kinda Hard",
        asked: false,
      },
      {
        category: "six",
        question: "what is 5555?",
        answer: "5555",
        point_value: "Hard",
        asked: false,
      },
    ]);
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
                            <div className="text-yellow-200 font-bold text-2xl border-2 border-black h-full w-full flex flex-col justify-center">
                              <h1
                                className={`${
                                  question.asked === false
                                    ? ""
                                    : "text-transparent"
                                }`}
                              >
                                {question.point_value}
                              </h1>
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
                changeQuestionToAsked(activeQuestion);
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
