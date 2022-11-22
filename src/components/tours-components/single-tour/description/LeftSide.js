import { ReactComponent as CalendarIcon } from 'assets/svg/calendar.svg';
import { ReactComponent as TrendingUpIcon } from 'assets/svg/trending-up.svg';
import { ReactComponent as UserIcon } from 'assets/svg/user.svg';
import { ReactComponent as StarIcon } from 'assets/svg/star-icon.svg';
import GuideImage from 'assets/images/users/user-10.jpg';
import TourGuide from './TourGuide';
import FactsItem from './FactsItem';

const LeftSide = ({ nextDate, difficulty, personCapacity, rating }) => {
  return (
    <div className="overview-box">
      <div>
        <div className="overview-box__group">
          <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
          <FactsItem factLabel={'Next Date'} factText={nextDate}>
            <CalendarIcon />
          </FactsItem>
          {/* <div className="overview-box__detail">
            <span className="overview-box__label">Next date</span>
            <span className="overview-box__text">{nextDate}</span>
          </div> */}
          <FactsItem factLabel={'Difficulty'} factText={difficulty}>
            <TrendingUpIcon />
          </FactsItem>
          {/* <div className="overview-box__detail">
            <span className="overview-box__label"></span>
            <span className="overview-box__text">{difficulty}</span>
          </div> */}
          <FactsItem factLabel={'Participants'} factText={personCapacity}>
            <UserIcon />
          </FactsItem>
          {/* <div className="overview-box__detail">
            <span className="overview-box__label">Participants</span>
            <span className="overview-box__text">{personCapacity}</span>
          </div> */}
          <FactsItem factLabel={'Rating'} factText={rating}>
            <StarIcon />
          </FactsItem>
          {/* <div className="overview-box__detail">
            <span className="overview-box__label">Rating</span>
            <span className="overview-box__text">{rating}</span>
          </div> */}
        </div>

        <div className="overview-box__group">
          <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

          <TourGuide
            role={'Lead Guide'}
            guideName={'Steven Miller'}
            guideImage={GuideImage}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
