import { ReactComponent as StarIcon } from 'assets/svg/star-icon.svg';

const SingleTourReviewCard = ({ reviewBy, reviewByImage, reviewContent }) => {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={reviewByImage}
          alt="Jim Brown"
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{reviewBy}</h6>
      </div>
      <p className="reviews__text">{reviewContent}</p>
      <div className="reviews__rating">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  );
};

export default SingleTourReviewCard;
