import LogoWhite from 'assets/images/logo-white.png';
import TourImageOne from 'assets/images/tours/tour-5-2.jpg';
import TourImageTwo from 'assets/images/tours/tour-5-1.jpg';

import './style.css';

const Cta = () => {
  return (
    <div className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src={LogoWhite} alt="Natours logo" />
        </div>
        <img src={TourImageOne} alt="" className="cta__img cta__img--1" />
        <img src={TourImageTwo} alt="" className="cta__img cta__img--2" />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button className="btn btn--green span-all-rows">
            Book tour now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
