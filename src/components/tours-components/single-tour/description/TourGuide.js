const TourGuide = ({ role, guideName, guideImage }) => {
  return (
    <div className="overview-box__detail">
      <img src={guideImage} alt={role} className="overview-box__img" />
      <span className="overview-box__label">{role}</span>
      <span className="overview-box__text">{guideName}</span>
    </div>
  );
};

export default TourGuide;
