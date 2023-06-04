import Card from "./Card/Card";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";
import DeleteModal from "./Modal/DeleteModal";
import VenueModal from "./Modal/VenueModal";
import { useState } from "react";

const OwnerVenue = () => {
  const result = [
    {
      id: 0,
      venue_name: "venue 1",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      id: 1,
      venue_name: "venue 2",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      id: 2,
      venue_name: "venue 3",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      id: 3,
      venue_name: "venue 4",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
    {
      id: 4,
      venue_name: "venue 5",
      address: "address 1",
      opening_time: "08:00",
      closing_time: "21:00",
      price_per_hour: "25",
    },
  ];

  const [deleteId, setDeleteId] = useState(0);
  const [editId, setEditId] = useState(0);

  return (
    <>
      <div className="container mt-4 d-flex justify-content-end">
        <MainButton
          type="submit"
          text="Add"
          style={{ width: "100px" }}
          data-bs-toggle="modal"
          data-bs-target="#venuemodal"
          onClick={() => setEditId(-1)}
        ></MainButton>
      </div>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
          {result &&
            result.length !== 0 &&
            result.map((venue) => {
              return (
                <div className="col d-flex justify-content-center">
                  <Card
                    venue={venue}
                    setDeleteId={setDeleteId}
                    setEditId={setEditId}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <DeleteModal modalText="Delete venue?" venue={result[deleteId]} />
      <VenueModal venue={ editId ? result[editId] : -1 } action="edit" />
    </>
  );
};

export default OwnerVenue;
