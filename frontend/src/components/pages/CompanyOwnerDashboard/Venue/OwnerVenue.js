import Card from "./Card/Card";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";
import VenueModal from "./Modal/VenueModal";
import {useContext, useEffect, useState} from "react";
import DeleteModal from "../../../organisms/Modal/DeleteModal/DeleteModal";
import { getCompanyVenues } from "../../../../services/Venue/Query";
import { deleteVenue } from "../../../../services/Venue/Mutator";
import {AuthContext} from "../../../../context/AuthContext";
import { useTranslation } from "react-i18next";

const OwnerVenue = () => {
  const {user} = useContext(AuthContext)
  const { t } = useTranslation();
  const [venues, setVenues] = useState([]);
  const [deleteId, setDeleteId] = useState(0);
  const [editId, setEditId] = useState(0);
  let [row, setRow] = useState([]);

  const [deleteShow, setDeleteShow] = useState(false);
  const [acceptShow, setAcceptShow] = useState(false);
  const [declineShow, setDeclineShow] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const getSelectedVenue = (venue_id) => {
    let wantedVenue = venues.find((v) => v.id === venue_id);
    console.log("wanted", wantedVenue);
    return wantedVenue;
  };

  const handleDelete = async () => {
    setDeleteShow(false);
    console.log(row);
    await deleteVenue(row);
    await fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await getCompanyVenues();
      setVenues(response.data);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [addShow, editShow]);

  return (
    <>
      <div className="container mt-4 d-flex justify-content-end">
        <MainButton
          type="submit"
          text={t("add")}
          style={{ width: "100px" }}
          onClick={() => {
            setAddShow(true);
            //setRow(d);
          }}
        ></MainButton>
      </div>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="row row-cols-xl-auto row-cols-lg-2 row-cols-md-2 row-cols-sm-1 justify-content-center">
          {venues.length !== 0 &&
            venues.map((venue) => {
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
          onSubmit: handleDelete,
          type: "Delete",
        })}
      />

      {/* <DeleteModal
        modalText="Delete venue?"
        venue={() => getSelectedVenue(editId)}
      /> */}
      {/* <VenueModal
        venue={() => getSelectedVenue(editId)}
        action={"edit"}
        editId={editId}
      /> */}
      <VenueModal
        user_id = {user.id}
        page={"venues"}
        table={"page"}
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
