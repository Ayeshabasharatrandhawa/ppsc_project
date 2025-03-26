import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] flex items-center bg-cover bg-center px-4 md:px-16"
      style={{ backgroundImage: "url('/img1.png')" }}
    >
      {/* Background Overlay for Readability */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="relative text-white max-w-2xl text-left">
        <h1
          className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Best Place to Prepare for Competitive Exams
        </h1>
        <p
          className="mt-4 text-sm sm:text-base font-light px-2"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          SkillSphere is a digital platform to crack competitive exams for government jobs with interactive quizzes,
          in-depth answers, and previous paper analysis for PPSC and FPSC. Platforms for Test Prep and MCQs.
        </p>

        {/* Responsive Button Section */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="px-6 py-3 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden w-full sm:w-auto"
            style={{
              background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
              backgroundSize: "200% 100%",
              transition: "background-position 0.5s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundPosition = "100% 0")}
            onMouseLeave={(e) => (e.target.style.backgroundPosition = "0 0")}
          >
            Prepare for Exams
          </button>

          <Link to="/signup">
            <button
              className="px-6 py-3 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden w-full sm:w-auto"
              style={{
                background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
                backgroundSize: "200% 100%",
                transition: "background-position 0.5s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundPosition = "100% 0")}
              onMouseLeave={(e) => (e.target.style.backgroundPosition = "0 0")}
            >
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
