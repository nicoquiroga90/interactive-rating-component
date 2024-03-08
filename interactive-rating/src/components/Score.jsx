import '../styles/Score.css'; 

export function Score({ score, handleScoreClick }){{


  return (
    <div className="score-container">
      {[1, 2, 3, 4, 5].map((e) => (
        <button
          key={e}
          className={score === e ? 'active' : 'inactive'}
          onClick={() => handleScoreClick(e)}
        >
          {e}
        </button>
      ))}
    </div>
  );
};
}