import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Quiztion8 = () => {
    const location = useLocation();
    const { name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6} = location.state || {};
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();
    const [Ask7, setAsk7] = useState("");
    const handleClick = (message) =>{
        setMessage(message);
        setAsk7(message);
    }

    const handleNext = () =>{
        navigate('/quiztion9', {state: {name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6, Ask7}})
    }

  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media1.tenor.com/m/J8D7WFWX4pIAAAAd/listening-music-musical-notes.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p
            className="text-xl mb-8 text-center"
            style={{ transform: "none" }}
            >
            What kind of music should we listen to? 🎶
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("Pop 🎤")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Pop 🎤
            </button>
            <button 
                onClick={() => handleClick("Jazz 🎷")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Jazz 🎷
            </button>
            <button 
                onClick={() => handleClick("Classical 🎻")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Classical 🎻
            </button>
            <button 
                onClick={() => handleClick("Rock 🎸")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Rock 🎸
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

export default Quiztion8
