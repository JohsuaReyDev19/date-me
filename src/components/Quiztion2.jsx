import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Quiztion2 = () => {
  const location = useLocation();
  const { name } = location.state || {};  // Accessing name from state
  const navigate = useNavigate();
  const [Message, setMessage] = useState("");
  const [Ask1, setAsk1] = useState("");

  const handleClick = (message) => {
    setMessage(message);
    setAsk1(message);
  };

  const handleNext = () => {
    navigate('/quiztion3', {state: {name, Ask1}});
  };

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold mb-6">
          Hey {name}, ❤️
        </h1>
        <img
          src="https://media1.tenor.com/m/rkjohpeNZnAAAAAd/mochi-poke-poke-cute-cat.gif"
          alt="GIF"
          className="w-64 h-64 rounded-lg mb-6"
          style={{ transform: 'none' }}
        />
        <p className="text-xl mb-8 text-center" style={{ transform: 'none' }}>
          Where would you like to go on our date? 🌍
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
          <button 
            onClick={() => handleClick("Beach 🏖️")}
           className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
            Beach 🏖️
          </button>
          <button
           onClick={() => handleClick("Restaurant 🍽️")}
           className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
            Restaurant 🍽️
          </button>
          <button
           onClick={() => handleClick("Movie 🎬")}
           className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
            Movie 🎬
          </button>
          <button
           onClick={() => handleClick("Park 🌳")}
           className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
            Park 🌳
          </button>
        </div>
            {Message && (
            <div className="text-center mt-6 space-y-4">
                <p className="text-xl font-bold">You selected: {Message}</p>
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

export default Quiztion2;
