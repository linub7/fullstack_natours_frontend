const RightSide = ({ about, description }) => {
  return (
    <div className="description-box">
      <h2 className="heading-secondary ma-bt-lg">{about}</h2>
      <p className="description__text">{description}</p>
    </div>
  );
};

export default RightSide;
