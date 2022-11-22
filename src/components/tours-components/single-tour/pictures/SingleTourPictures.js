import SingleTourPictureItem from './SingleTourPictureItem';
import TourImage from 'assets/images/tours/tour-5-1.jpg';
import './style.css';

const SingleTourPictures = () => {
  return (
    <div className="section-pictures">
      <SingleTourPictureItem
        singleTourAlt={'The Park Camper Tour 1'}
        singleTourImage={TourImage}
      />
      {/* <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--1"
          src="img/tour-5-1.jpg"
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--2"
          src="img/tour-5-2.jpg"
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--3"
          src="img/tour-5-3.jpg"
          alt="The Park Camper Tour 1"
        />
      </div> */}
    </div>
  );
};

export default SingleTourPictures;
