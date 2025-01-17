import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Quiztion6 = () => {
    const location = useLocation();
    const { name, Ask1, Ask2, Ask3, Ask4 } = location.state || {};
    const navigate = useNavigate();
    const [Message, setMessage] = useState("");
    const [Ask5, setAsk5] = useState("");
    const handleClick = (message) => {
        setMessage(message);
        setAsk5(message)
    } 
    
    const handleNext = () => {
        navigate('/quiztion7', {state: {name,Ask1, Ask2, Ask3, Ask4, Ask5}})
    }
  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hey {name}, ❤️</h1>
            <img
            src="https://media1.tenor.com/m/v9sZ1F-gmWMAAAAd/milk-and-mocha-milk-and-mocha-bear.gif"
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            style={{ transform: "none" }}
            />
            <p
            className="text-xl mb-8 text-center"
            style={{ transform: "none" }}
            >
            What color should I wear on our date? 🎨
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            <button 
                onClick={() => handleClick("Red ❤️")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Red ❤️
            </button>
            <button 
                onClick={() => handleClick("Blue 💙")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Blue 💙
            </button>
            <button 
                onClick={() => handleClick("Black 🖤")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Black 🖤
            </button>
            <button 
                onClick={() => handleClick("Yellow 💛")}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform">
                Yellow 💛
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

export default Quiztion6
