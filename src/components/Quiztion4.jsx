import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Quiztion4 = () => {
    const location = useLocation();
    const { name, Ask1, Ask2 } = location.state || {};
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();
    const [Ask3, setAsk3] = useState("");

    const handleClick = (message) =>{
        setMessage(message);
        setAsk3(message)
    }

    const handleNext = () => {
        navigate('/quiztion5', {state: {name, Ask1, Ask2, Ask3}});
    }
  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media1.tenor.com/m/naWX8j8QzYsAAAAC/milk-and-mocha-milk-and-mocha-bear.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p
            className="text-xl mb-8 text-center"
            style={{ transform: "none" }}
            >
            Should I bring flowers or chocolates? 🌹🍫
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("Flowers 🌹")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Flowers 🌹
            </button>
            <button 
                onClick={() => handleClick("Chocolates 🍫")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Chocolates 🍫
            </button>
            <button 
                onClick={() => handleClick("Both 🥰")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Both 🥰
            </button>
            <button 
                onClick={() => handleClick("Surprise me! 😋")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Surprise me! 😋
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

export default Quiztion4
