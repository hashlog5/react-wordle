import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState(['hello', 'ninja']); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log('formatting the guess - ', currentGuess);
  };

  const addNewGuess = () => {};

  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('you used all your guesses!');
        return;
      }

      if (history.includes(currentGuess)) {
        console.log('you already tried that word.');
        return;
      }

      if (currentGuess.length !== 5) {
        console.log('word must be 5 chars.');
        return;
      }

      formatGuess();
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
