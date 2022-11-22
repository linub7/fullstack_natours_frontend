const CardHeader = ({ image, name }) => {
  return (
    <div className="card__header">
      <div className="card__picture">
        <div className="card__picture-overlay">&nbsp;</div>
        <img src={image} alt="Tour 1" className="card__picture-img" />
      </div>

      <h3 className="heading-tertirary">
        <span>{name}</span>
      </h3>
    </div>
  );
};

export default CardHeader;
