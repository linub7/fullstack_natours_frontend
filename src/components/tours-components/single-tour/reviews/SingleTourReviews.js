import UserImage from 'assets/images/users/user-7.jpg';
import SingleTourReviewCard from './SingleTourReviewCard';
import './style.css';
const SingleTourReviews = ({ reviewBy, reviewContent }) => {
  return (
    <section className="section-reviews">
      <div className="reviews">
        <SingleTourReviewCard
          reviewBy={reviewBy}
          reviewContent={reviewContent}
          reviewByImage={UserImage}
        />
      </div>
    </section>
  );
};

export default SingleTourReviews;
