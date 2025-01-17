import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoodbyeComponent = () => {
  const [goodbyeMessage, setGoodbyeMessage] = useState("");
  const useNavigate = useNavigate;

  const navigate = (message) => {
    setGoodbyeMessage(message);
  };

  
  const handleNext = () => {
    navigate("/next");
  };
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold mb-6">Hey joadf, ❤️</h1>
        <img
          src="https://media.tenor.com/zCpmxNoEU7IAAAAj/milk-and-mocha.gif"
          alt="GIF"
          className="w-64 h-64 rounded-lg mb-6"
        />
        <p className="text-xl mb-8 text-center">What’s the perfect way to say goodbye? 💌</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
          <button
            onClick={() => handleGoodbye("A Hug 🤗")}
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform"
          >
            A Hug 🤗
          </button>
          <button
            onClick={() => handleGoodbye("A Kiss 😘")}
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform"
          >
            A Kiss 😘
          </button>
          <button
            onClick={() => handleGoodbye("A High-Five ✋")}
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform"
          >
            A High-Five ✋
          </button>
          <button
            onClick={() => handleGoodbye("A Promise to Meet Again 💕")}
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform"
          >
            A Promise to Meet Again 💕
          </button>
        </div>
        {goodbyeMessage && (
          <div className="text-center mt-6 space-y-4">
            <p className="text-xl font-bold">
              You selected: {goodbyeMessage}
            </p>
            <button
              onClick={handleNext}
              className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-600 transition-transform"
            >
              Next ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoodbyeComponent;
