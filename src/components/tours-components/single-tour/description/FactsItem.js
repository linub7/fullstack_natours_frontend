const FactsItem = ({ children, factLabel, factText }) => {
  return (
    <div className="overview-box__detail">
      <div className="overview-box__icon">{children}</div>
      <span className="overview-box__label">{factLabel}</span>
      <span className="overview-box__text">{factText}</span>
    </div>
  );
};

export default FactsItem;
