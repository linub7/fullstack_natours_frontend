import { ReactComponent as Map } from 'assets/svg/map.svg';
import { ReactComponent as Calendar } from 'assets/svg/calendar.svg';
import { ReactComponent as Flag } from 'assets/svg/flag.svg';
import { ReactComponent as User } from 'assets/svg/user.svg';

const CardDetails = ({
  detailHeader,
  detailParagraph,
  detailLocation,
  detailTime,
  detailStops,
  detailPersons,
}) => {
  return (
    <div className="card__details">
      <h4 className="card__sub-heading">{detailHeader}</h4>

      <p className="card__text">{detailParagraph}</p>

      <div className="card__data">
        <svg className="card__icon">
          <Map />
        </svg>
        <span>{detailLocation}</span>
      </div>
      <div className="card__data">
        <svg className="card__icon">
          <Calendar />
        </svg>
        <span>{detailTime}</span>
      </div>
      <div className="card__data">
        <svg className="card__icon">
          <Flag />
        </svg>
        <span>{detailStops}</span>
      </div>
      <div className="card__data">
        <svg className="card__icon">
          <User />
        </svg>
        <span>{detailPersons}</span>
      </div>
    </div>
  );
};

export default CardDetails;
