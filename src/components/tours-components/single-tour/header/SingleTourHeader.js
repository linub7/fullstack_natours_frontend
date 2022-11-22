import { ReactComponent as ClockIcon } from 'assets/svg/clock.svg';
import { ReactComponent as MapPinIcon } from 'assets/svg/map-pin.svg';
import './style.css';

const SingleTourHeader = ({ tourName, days, location }) => {
  return (
    <div className="section-header">
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>{tourName}</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <ClockIcon className="heading-box__icon" />
            <span className="heading-box__text">{days}</span>
          </div>
          <div className="heading-box__detail">
            <div className="heading-box__icon">
              <MapPinIcon />
            </div>
            <span className="heading-box__text">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTourHeader;
