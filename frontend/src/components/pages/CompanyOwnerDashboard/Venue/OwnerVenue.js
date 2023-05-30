import Card from "./Card/Card";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const OwnerVenue = () => {
  const result = [
    {
      venue_name: "venue 1",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      venue_name: "venue 1",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      venue_name: "venue 1",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      venue_name: "venue 1",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      venue_name: "venue 1",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
  ];

  return (
    <>
      <MainButton type="submit" text="Add" style={{width: "100px"}} ></MainButton>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
          {result &&
            result.length !== 0 &&
            result.map((venue) => {
              return (
                <div className="col d-flex justify-content-center">
                  <Card venue={venue} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default OwnerVenue;
