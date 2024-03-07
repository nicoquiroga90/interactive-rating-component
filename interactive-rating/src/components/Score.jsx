import{ useState } from 'react';
import '../styles/Score.css'; 

export function Score(){{
  const [selectedScore, setSelectedScore] = useState(false);

  const handleScoreClick = (score) => {
    setSelectedScore(score);
  };

  return (
    <div className="score-container">
      {[1, 2, 3, 4, 5].map((score) => (
        <button
          key={score}
          className={selectedScore === score ? 'active' : 'inactive'}
          onClick={() => handleScoreClick(score)}
        >
          {score}
        </button>
      ))}
    </div>
  );
};
}