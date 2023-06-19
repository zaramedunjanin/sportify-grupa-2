import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import {
  getReservationsByCompany,
  getBookingsByVenueId,
  rejectReservation,
  acceptReservation,
} from "../../../../services/Reservation/Query";
import { useTranslation } from "react-i18next";

function formatTimestamp(timestamp) {
  const currentDate = new Date();
  const targetDate = new Date(timestamp);

  const diffInMilliseconds = currentDate - targetDate;
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    // Today
    const hours = targetDate.getHours();
    const minutes = targetDate.getMinutes();
    return `Today, ${hours}:${minutes}`;
  } else if (diffInDays === 1) {
    // Yesterday
    const hours = targetDate.getHours();
    const minutes = targetDate.getMinutes();
    return `Yesterday, ${hours}:${minutes}`;
  } else {
    // Other date and time format
    return targetDate.toLocaleString(); // Or use any other desired format for displaying the date and time
  }
}

const Booking = () => {
  const [reservations, setReservations] = useState([]);
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();

  const fetchData = async () => {
    try {
      const response = await getReservationsByCompany();
      setReservations(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleReservationClick = async (reservation) => {
    try {
      const response = await getBookingsByVenueId(reservation.venue.id);
      let l = [];
      for (const data of response.data) {
        const startDate = new Date(data.start_time);
        const endDate = new Date(data.end_time);
        const dateObject = {
          title: data.user.first_name + " " + data.user.last_name,
          //date: createdAt.toISOString().toString(), // Extracting the date part
          start: startDate.toISOString().toString(),
          end: endDate.toISOString().toString(),
        };
        l.push(dateObject);
      }
      setEvents(l);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleAccept = async (reservation) => {
    try {
      const response = await acceptReservation(reservation.id);
      await fetchData();
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleReject = async (reservation) => {
    try {
      const response = await rejectReservation(reservation.id);
      await fetchData();
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  function formatTimestamp1(timestamp) {
    const date = new Date(timestamp);
    const options = {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString("en-US", options);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row d-flex justify-content-center mt-4 mb-4">
      <div className="col-8 m-2 shadow" style={{ width: "800px" }}>
        <FullCalendar
          height={650}
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          weekends={true}
          events={
            //   [
            //   { title: "event 1", date: "2023-06-18T11:32:14.969Z" },
            //   { title: "event 2", date: "2023-06-18T10:32:14.969420+02:00" },
            // ]
            events
          }
        />
      </div>
      <div className="col-4 m-2 shadow">
        <div class="list-group">
          {reservations &&
            reservations.length !== 0 &&
            reservations.map((reservation) => {
              return (
                <a
                  href="#"
                  class="list-group-item list-group-item-action background-blue"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5
                      class="mb-1"
                      onClick={() => handleReservationClick(reservation)}
                    >
                      {formatTimestamp1(reservation.start_time)} -{" "}
                      {formatTimestamp1(reservation.end_time)}
                    </h5>
                    <small>{formatTimestamp(reservation.created_at)}</small>
                    <div class="dropdown position-absolute top-0 end-0">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-v"></i>
                      </a>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={() => handleAccept(reservation)}
                          >
                            {t("accept")}
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={() => handleReject(reservation)}
                          >
                            {t("reject")}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">
                      Today, {reservation.start_time}h - {reservation.end_time}h
                    </h5>
                    <small>{formatTimestamp(reservation.created_at)} </small>
                  </div> */}
                  {/* <p class="mb-1">Some placeholder content in a paragraph.</p> */}
                  <p>
                    {t("venue")} <small>{reservation.venue.venue_name}</small>
                  </p>
                  <p>
                    {t("sport")} <small>{reservation.sport.sport_name}</small>
                  </p>
                  <p>
                    {t("reservationist")}{" "}
                    <small>
                      {reservation.user.first_name} {reservation.user.last_name}
                    </small>
                  </p>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Booking;
