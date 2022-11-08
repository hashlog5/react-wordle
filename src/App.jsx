import { useEffect, useState } from 'react';

import Wordle from './components/Wordle';
import './App.css';

const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then((res) => res.json())
      .then((db) => {
        const randomSolution = db[Math.floor(Math.random() * db.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};

export default App;
