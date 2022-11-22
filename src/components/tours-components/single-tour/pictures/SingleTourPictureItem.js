const SingleTourPictureItem = ({ singleTourImage, singleTourAlt }) => {
  return (
    <div className="picture-box">
      <img
        className="picture-box__img picture-box__img--1"
        src={singleTourImage}
        alt={singleTourAlt}
      />
    </div>
  );
};

export default SingleTourPictureItem;
