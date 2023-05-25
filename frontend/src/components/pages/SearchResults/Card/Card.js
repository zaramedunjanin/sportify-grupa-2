import myImage from './placeholder.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';

import './Card.css'

const Card = ({ venue, ...rest }) => {

  const formatTime = (timeString) => {
   const [hours, minutes] = timeString.split(':');
    const parsedTime = `${hours}:${minutes}`;

    return parsedTime;
  }

  return <>
    <div className="card min-width-card mb-5" style={{ width: "17rem", fontSize: "12px" }}>
      <img src={myImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="row">
          <div className="col">
            <div className="row fw-bolder fs-6">
              <p className='card-title' style={{ marginLeft: "0px !important" }}>
                {venue.venue_name}
                <FontAwesomeIcon icon={faFutbol} className='me-1 ms-1' />
                <FontAwesomeIcon icon={faBasketball} className='me-1' />
                <FontAwesomeIcon icon={faVolleyball} className='me-1' />
              </p>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row fw-semibold" style={{ fontSize: "16px" }}>
              <p> <FontAwesomeIcon icon={faLocationDot} className='me-1' /> {venue.address} </p>
            </div>
            <div className="row fw-semibold" style={{ fontSize: "16px" }}>
              <p> <FontAwesomeIcon icon={faStar} className='me-1' />
                4.84 </p>
            </div>
            <div className="row fw-semibold" style={{ fontSize: "16px" }}>
              <p> <FontAwesomeIcon icon={faClock} className='me-1' />
                {formatTime(venue.opening_time)}h - {formatTime(venue.closing_time)}h </p>
            </div>
            <div className="row fw-semibold" style={{ fontSize: "16px" }}>
              <p> <FontAwesomeIcon icon={faTag} className='me-1' rotation={90} />
                {venue.price_per_hour} KM </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-2">
          <a href="#" style={{ width: "200px" }} className="btn btn-warning text-center rounded-pill">Book now</a>
        </div>

      </div>
    </div>
  </>
}

export default Card;