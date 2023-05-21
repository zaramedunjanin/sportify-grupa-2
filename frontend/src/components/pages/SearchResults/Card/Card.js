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

const Card = () => {
  return <>
    <div className="card mb-5" style={{ width: "17rem", fontSize: "12px" }}>
      <img src={myImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="row">
          <div className="col">
            <div className="row fw-bolder fs-6">
              <p className='card-title' style={{ marginLeft: "0px !important" }}>
                Victory Arena
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
              <p> <FontAwesomeIcon icon={faLocationDot} className='me-1' /> Munira Gavrankapetanovica 3 </p>
            </div>
            <div className="row fw-semibold" style={{ fontSize: "16px" }}>
              <p> <FontAwesomeIcon icon={faStar} className='me-1' />
                4.84 </p>
            </div>
            <div className="row fw-semibold" style={{ fontSize: "16px" }}>
              <p> <FontAwesomeIcon icon={faClock} className='me-1' />
                8h - 23h </p>
            </div>
            <div className="row fw-semibold" style={{ fontSize: "16px" }}>
              <p> <FontAwesomeIcon icon={faTag} className='me-1' rotation={90} />
                40 KM </p>
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