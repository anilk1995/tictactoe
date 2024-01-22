function History({ history, moveTo, currentMove }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, i) => {
          return (
            <li key={i}>
              <button
                type="button"
                className={`${currentMove === i ? 'active' : ''}btn-move`}
                onClick={() => moveTo(i)}
                style={{ fontWeight: currentMove === i ? 'bold' : 'normal' }}
              >
                {i === 0 ? 'Go to game start' : `Go to move #${i}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
