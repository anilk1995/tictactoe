import './styles.scss';

import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) return;

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, squareIndex) => {
        if (clickedPosition === squareIndex) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <StatusMessage isNext={isXNext} winner={winner} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
