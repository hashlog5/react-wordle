import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {};

  const addNewGuess = () => {};

  const handleKeyup = () => {};

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
  };
};

export default useWordle;
