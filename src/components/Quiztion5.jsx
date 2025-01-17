import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Quiztion5 = () => {
    const location = useLocation();
    const { name, Ask1, Ask2, Ask3 } = location.state || {};
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();
    const [Ask4, setAsk4] = useState("");

    const handleClick = (message) =>{
        setMessage(message);
        setAsk4(message);
    }

    const handleNext = () => {
        navigate('/quiztion6', {state: {name, Ask1, Ask2, Ask3, Ask4}});
    }
  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media1.tenor.com/m/5KrBx7BrdgMAAAAC/milk-and-mocha-milk-and-mocha-bear.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p
            className="text-xl mb-8 text-center"
            style={{ transform: "none" }}
            >
            What’s your favorite way to relax? 🛋️
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("Chatting 💬")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Chatting 💬
            </button>
            <button 
                onClick={() => handleClick("Listening to Music 🎧")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Listening to Music 🎧
            </button>
            <button 
                onClick={() => handleClick("Watching Movies 🎥")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Watching Movies 🎥
            </button>
            <button 
                onClick={() => handleClick("Exploring Outdoors 🌿")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Exploring Outdoors 🌿
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

export default Quiztion5
