import Row from './Row';

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((g, i) => {
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
};

export default Grid;
