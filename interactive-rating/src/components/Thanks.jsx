import "../styles/Thanks.css";

export function Thanks({ score }) {
  return (
    <div className="thanks-conteiner">
      <img className="thanks-img" src="./images/illustration-thank-you.svg" />

      <div className="thanks-selection"> You selected {score} out of 5 </div>

      <div className="thanks-you">Thank you! </div>
      <div className="thanks-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </div>
    </div>
  );
}
