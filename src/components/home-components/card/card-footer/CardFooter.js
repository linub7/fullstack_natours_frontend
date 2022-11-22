const CardFooter = ({ price, rating, quantity }) => {
  return (
    <div className="card__footer">
      <p>
        <span className="card__footer-value">{price}</span>
        {/* $297 */}
        <span className="card__footer-text">per person</span>
      </p>
      <p className="card__ratings">
        <span className="card__footer-value">{rating}</span>
        {/* 4.9 */}
        <span className="card__footer-text">rating ({quantity})</span>
        {/* 21 */}
      </p>
      <a href="#" className="btn btn--green btn--small">
        Details
      </a>
    </div>
  );
};

export default CardFooter;
