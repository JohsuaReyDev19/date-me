import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Quiztion12 = () => {
    const location = useLocation();
    const { name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6, Ask7, Ask8, Ask9 } = location.state || {};
    const [Message, setMessage] = useState();
    const navigate = useNavigate();
    const [Ask10, setAsk10] = useState();
    const handleClick = (message) =>{
        setMessage(message);
        setAsk10(message);
    }
    const handleNext = () =>{
        navigate('/quiztion13', {state: {name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6, Ask7, Ask8, Ask9, Ask10}})
    }
  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p className="text-xl mb-8 text-center" style={{ transform: "none" }}>
            How should we end the night? 🌌
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("Stargazing ✨")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Stargazing ✨
            </button>
            <button 
                onClick={() => handleClick("Playing Games 🎮")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Playing Games 🎮
            </button>
            <button 
                onClick={() => handleClick("Deep Talks 🗨️")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Deep Talks 🗨️
            </button>
            <button 
                onClick={() => handleClick("Dancing 💃")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Dancing 💃
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

export default Quiztion12
