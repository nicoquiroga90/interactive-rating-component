import "../styles/Rating.css";
import { Score } from "./Score";
import { Link } from "react-router-dom";

export function Rating({ score, handleScoreClick }) {
  return (
    <div className="rating-conteiner">
      <img className="star" src="./images/icon-star.svg" />
      <div className="rating-text">
        <h1 className="how-text">How did we do?</h1>
        <p className="main-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <Score score={score} handleScoreClick={handleScoreClick} />
      <Link to="/thanks" className="submit">
        SUBMIT
      </Link>
    </div>
  );
}
