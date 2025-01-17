import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Quiztion3 = () => {
      const location = useLocation();
      const { name, Ask1 } = location.state || {}; 
      const [Message, setMessage] = useState("");
      const navigate = useNavigate();
      const [Ask2, setAsk2] = useState("");
      const handleClick = (message) =>{
        setMessage(message);
        setAsk2(message)
      }

      const handleNext = () => {
        navigate('/quiztion4', {state: {name, Ask1, Ask2,}});
      }
  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media1.tenor.com/m/R74gdS_SrRYAAAAd/quby-quby-sticker.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p
            className="text-xl mb-8 text-center"
            style={{ transform: "none" }}
            >
            What time should I pick you up? 🕒
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("Morning ☀️")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Morning ☀️
            </button>
            <button 
                onClick={() => handleClick("Afternoon 🌤️")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Afternoon 🌤️
            </button>
            <button 
                onClick={() => handleClick("Evening 🌆")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Evening 🌆
            </button>
            <button 
                onClick={() => handleClick("Night 🌙")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Night 🌙
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

  )
}

export default Quiztion3
