import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Quiztion10 = () => {
    const location = useLocation();
    const { name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6, Ask7, Ask8 } = location.state || {};
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();
    const [Ask9, setAsk9] = useState("");


    const handleClick = (message) => {
        setMessage(message);
        setAsk9(message);
    }

    const handleNext = () => {
        navigate('/quiztion12', {state: {name, Ask1, Ask2, Ask3, Ask4, Ask5, Ask6, Ask7, Ask8, Ask9}});
    }
  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media1.tenor.com/m/42qgq33RCmkAAAAC/milk-and-mocha-milk-and-mocha-bear.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p className="text-xl mb-8 text-center" style={{ transform: "none" }}>
            Should we end the day with dessert? 🍰
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("Ice Cream 🍦")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Ice Cream 🍦
            </button>
            <button 
                onClick={() => handleClick("Cake 🍰")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Cake 🍰
            </button>
            <button 
                onClick={() => handleClick("Donuts 🍩")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Donuts 🍩
            </button>
            <button 
                onClick={() => handleClick("All of the above! 😍")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                All of the above! 😍
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

export default Quiztion10
