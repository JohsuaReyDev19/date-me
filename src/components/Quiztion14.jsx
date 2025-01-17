import React from "react";
import { useLocation } from "react-router-dom";

const Quiztion14 = () => {
  const location = useLocation();
  const {
    Ask1,
    Ask2,
    Ask3,
    Ask4,
    Ask5,
    Ask6,
    Ask7,
    Ask8,
    Ask9,
    Ask10,
    Ask11,
  } = location.state || {};

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <div
        className="text-center opacity-0 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-bounce">
          Yay! 🎉
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6 animate-fade-in delay-1s">
          " Screenshot this, here’s what we planned "
        </p>
        <div className="mt-4 space-y-3 text-sm sm:text-base lg:text-lg animate-slide-up">
          <p>
            Where would you like to go on our date? 🌍 <strong>{Ask1}</strong>
          </p>
          <p>
            What time should I pick you up? 🕒 <strong>{Ask2}</strong>
          </p>
          <p>
            Should I bring flowers or chocolates? 🌹🍫 <strong>{Ask3}</strong>
          </p>
          <p>
            What’s your favorite way to relax? 🛋️ <strong>{Ask4}</strong>
          </p>
          <p>
            What color should I wear on our date? 🎨 <strong>{Ask5}</strong>
          </p>
          <p>
            What genre of movie would you like to watch? 🎥 <strong>{Ask6}</strong>
          </p>
          <p>
            What kind of music should we listen to? 🎶 <strong>{Ask7}</strong>
          </p>
          <p>
            What would you like to eat? 🍕 <strong>{Ask8}</strong>
          </p>
          <p>
            Should we end the day with dessert? 🍰 <strong>{Ask9}</strong>
          </p>
          <p>
            How should we end the night? 🌌 <strong>{Ask10}</strong>
          </p>
          <p>
            What’s the perfect way to say goodbye? 💌 <strong>{Ask11}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiztion14;
