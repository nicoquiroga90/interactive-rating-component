import "../styles/Rating.css";

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
      1 2 3 4 5<button class="submit">Submit</button>
    </div>
  );
}
