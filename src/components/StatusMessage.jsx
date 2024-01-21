function StatusMessage({ isNext, winner, squares }) {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isNext ? 'X' : 'O';

  function renderStatusMessage() {
    if (winner)
      return (
        <>
          Winner is
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );

    if (!winner && noMovesLeft)
      return (
        <>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </>
      );

    return (
      <>
        Next player is
        <span className={isNext ? 'text-green' : 'text-orange'}>
          {nextPlayer}
        </span>
      </>
    );
  }

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
}

export default StatusMessage;
