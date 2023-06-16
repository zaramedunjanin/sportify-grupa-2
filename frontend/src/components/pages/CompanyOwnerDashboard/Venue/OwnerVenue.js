import Card from "./Card/Card";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";
import VenueModal from "./Modal/VenueModal";
import { useState } from "react";
import DeleteModal from "../../../organisms/Modal/DeleteModal/DeleteModal";

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
  let [row, setRow] = useState([]);

  const [deleteShow, setDeleteShow] = useState(false);
  const [acceptShow, setAcceptShow] = useState(false);
  const [declineShow, setDeclineShow] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const getSelectedVenue = (venue_id) => {
    let wantedVenue = result.find((v) => v.id === venue_id);
    console.log("wanted", wantedVenue);
    return wantedVenue;
  };

  const handleDelete = async () => {
    setDeleteShow(false);
    // await deleteData(row.id, page);
    // await fetchData();
  };
  const handleDecline = async () => {
    setDeclineShow(false);
    // await declineCompany(row, page);
    // await fetchData();
  };
  const handleAccept = async () => {
    setAcceptShow(false);
    // await acceptCompany(row, page);
    // await fetchData();
  };

  return (
    <>
      <div className="container mt-4 d-flex justify-content-end">
        <MainButton
          type="submit"
          text="Add"
          style={{ width: "100px" }}
          
          onClick={() => {
            setEditShow(true);
            //setRow(d);
          }}
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
                    setDeleteId={() => {
                      setRow(venue);
                      setDeleteShow(true);
                    }}
                    setEditId={() => {
                      setEditShow(true);
                      setRow(venue);
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <DeleteModal
        {...(deleteShow === true && {
          show: deleteShow,
          onHide: () => {
            setDeleteShow(false);
          },
          onClick: handleDelete,
          type: "Delete",
        })}
        {...(declineShow === true && {
          show: declineShow,
          onHide: () => {
            setDeclineShow(false);
          },
          onClick: handleDecline,
          type: "Decline",
        })}
        {...(acceptShow === true && {
          show: acceptShow,
          onHide: () => {
            setAcceptShow(false);
          },
          onClick: handleAccept,
          type: "Accept",
        })}
      />

      {/* <DeleteModal
        modalText="Delete venue?"
        venue={() => getSelectedVenue(editId)}
      /> */}
      <VenueModal
        venue={() => getSelectedVenue(editId)}
        action={"edit"}
        editId={editId}
      />
      <VenueModal
        // page={"page"}
        // table={"page"}
        data={row}
        {...(addShow === true && {
          add: addShow,
          show: addShow,
          onHide: () => setAddShow(false),
        })}
        {...(editShow === true && {
          edit: editShow,
          show: editShow,
          onHide: () => setEditShow(false),
        })}
      />
    </>
  );
};

export default OwnerVenue;
