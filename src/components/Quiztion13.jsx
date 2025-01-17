import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Quiztion13 = () => {
    const location = useLocation();
    const { name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6, Ask7, Ask8, Ask9, Ask10 } = location.state || {};
    const [Message, setMessage] = useState("");
    const [Ask11, setAsk11] = useState("");
    const navigate = useNavigate();
    
    const handleClick = (message) => {
        setMessage(message);
        setAsk11(message);
    }

    const handleNext = () =>{
        navigate('/quiztion14', {state: {name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6, Ask7, Ask8, Ask9, Ask10, Ask11}});
    }
  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media.tenor.com/zCpmxNoEU7IAAAAj/milk-and-mocha.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p className="text-xl mb-8 text-center" style={{ transform: "none" }}>
            What’s the perfect way to say goodbye? 💌
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("A Hug 🤗")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                A Hug 🤗
            </button>
            <button 
                onClick={() => handleClick("A Kiss 😘")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                A Kiss 😘
            </button>
            <button 
                onClick={() => handleClick("A High-Five ✋")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                A High-Five ✋
            </button>
            <button 
                onClick={() => handleClick("A Promise to Meet Again 💕")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                A Promise to Meet Again 💕
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

export default Quiztion13
