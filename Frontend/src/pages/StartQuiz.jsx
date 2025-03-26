import React from 'react'
import MainLayout from '../layout/MainLayout'

import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
  
  const navigate = useNavigate();
  const mcqs = [
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correct: 2,
    },
    {
      question: "Who won the Nobel Peace Prize in 2020?",
      options: ["Greta Thunberg", "World Health Org", "Malala Yousafzai", "Barack Obama"],
      correct: 1,
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
    },
  
  ];
  return (
    <MainLayout>
         <div className="bg-green-700 text-white py-12 px-6 text-center md:py-16 mt-15">
        <h1
          className="text-2xl md:text-5xl font-bold leading-snug"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Start Quiz<span className="text-yellow-400"> & Practice </span>
          <br /> Your Concepts
        </h1>
      </div>
      
    <div className="flex flex-col items-center px-6">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {mcqs.map((mcq, index) => (
            <div key={index} className="border p-5 shadow-md bg-white">
              <h3 className="text-sm md:text-base font-semibold">{mcq.question}</h3>
              <hr className="my-2 border-gray-300" />
              <ul className="space-y-2">
                {mcq.options.map((option, i) => (
                  <li key={i} className="text-gray-700 flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name={`mcq-${index}`} 
                      id={`mcq-${index}-option-${i}`} 
                      className="cursor-pointer accent-green-600 w-5 h-5"
                    />
                    <label htmlFor={`mcq-${index}-option-${i}`} className="cursor-pointer text-gray-700">
                      <span className="font-semibold text-green-600">{String.fromCharCode(65 + i)})</span> {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>  <button
      className="mt-6 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
      style={{
        background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
        backgroundSize: "200% 100%",
        transition: "background-position 0.5s ease-in-out",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundPosition = "100% 0")}
      onMouseLeave={(e) => (e.target.style.backgroundPosition = "0 0")}
      onClick={() => navigate("/getresult")}
    >
      Submit Mcq
    </button>
    </div>
    
    </MainLayout>
    
  )
}

export default StartQuiz