import Row from './Row';

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((g, i) => {
        if(turn === i){
          return <Row key={i} currentGuess={currentGuess} />
        }

        return <Row key={i} guess={g} />;
      })}
    </div>
  );
};

export default Grid;
