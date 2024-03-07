import "../styles/Rating.css";
import { Score } from "./Score";

export function Rating() {
  return (
    <div class="rating-conteiner">
      <img class="star" src="./images/icon-star.svg" />
      <div class="rating-text">
        <h1 class="how-text">How did we do?</h1>
        <p class="main-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <Score/>
      <button class="submit">SUBMIT</button>
    </div>
  );
}
