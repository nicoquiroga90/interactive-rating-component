import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Rating } from './components/Rating';
import { Thanks } from './components/Thanks';
import './styles/App.css';
import { useState } from 'react';

 

function App() {

  const [score, setScore] = useState(false);

  const handleScoreClick = (score) => {
    setScore(score);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Rating score={score} handleScoreClick={handleScoreClick}/>} />
          <Route path="/thanks" element={<Thanks score={score}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
