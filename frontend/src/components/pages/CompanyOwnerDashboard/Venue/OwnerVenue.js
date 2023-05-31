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
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div className="container mt-4 d-flex justify-content-end">
        <MainButton
          type="submit"
          text="Add"
          style={{ width: "100px" }}
        ></MainButton>
      </div>
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
