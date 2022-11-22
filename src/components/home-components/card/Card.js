import TourCover from 'assets/images/tours/tour-1-cover.jpg';
import CardDetails from './card-details/CardDetails';
import CardFooter from './card-footer/CardFooter';
import CardHeader from './card-header/CardHeader';
import './style.css';

const Card = () => {
  return (
    <div className="card">
      <CardHeader image={TourCover} name="The Forest Hiker" />

      {/* <div className="card__details">
        <h4 className="card__sub-heading">Easy 5-day tour</h4>
        <p className="card__text">
          Breathtaking hike through the Canadian Banff National Park
        </p>
        <div className="card__data">
          <svg className="card__icon">
            <Map />
          </svg>
          <span>Banff, Canada</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <Calendar />
          </svg>
          <span>April 2021</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <Flag />
          </svg>
          <span>3 stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <User />
          </svg>
          <span>25 people</span>
        </div>
      </div> */}
      <CardDetails
        detailHeader={'Easy 5-day tour'}
        detailParagraph={
          'Breathtaking hike through the Canadian Banff National Park'
        }
        detailLocation={'Banff, Canada'}
        detailTime={'April 2021'}
        detailStops={'3 stops'}
        detailPersons={'25 people'}
      />
      <CardFooter price={'$297'} rating={4.9} quantity={21} />
    </div>
  );
};

export default Card;
