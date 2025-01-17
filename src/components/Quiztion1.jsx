import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiztion1 = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setName(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setError('Please enter your name before continuing!');
      return;
    }
    navigate('/quiztion2', { state: { name } });
  };

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Hello! 💖</h1>
        <p className="text-lg">Type your name here</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 mr-4 rounded-lg text-black text-center"
            value={name}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition"
          >
            Let’s Start!
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Quiztion1;
