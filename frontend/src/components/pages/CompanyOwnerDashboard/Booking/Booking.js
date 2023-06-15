import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="row d-flex justify-content-center mt-4 mb-4">
      <div className="col-8 m-2 shadow" style={{ width: "800px" }}>
        <FullCalendar
          height={650}
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          weekends={true}
          events={[
            { title: "event 1", date: "2023-06-15T14:00:00" },
            { title: "event 2", date: "2023-06-16" },
          ]}
        />
      </div>
      <div className="col-4 m-2 shadow">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action background-blue "
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Today, 14:00h - 16:00h</h5>
              <small>2h ago</small>
            </div>
            {/* <p class="mb-1">Some placeholder content in a paragraph.</p> */}
            <p>
              Venue: <small>Venue 1</small>
            </p>
            <p>
              Sport: <small>Basketball</small>
            </p>
            <p>
              Reservationist: <small>Almir Handabaka</small>
            </p>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Today, 14:00h - 16:00h</h5>
              <small>2h ago</small>
            </div>
            {/* <p class="mb-1">Some placeholder content in a paragraph.</p> */}
            <p>
              Venue: <small>Venue 1</small>
            </p>
            <p>
              Sport: <small>Basketball</small>
            </p>
            <p>
              Reservationist: <small>Almir Handabaka</small>
            </p>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Today, 14:00h - 16:00h</h5>
              <small>2h ago</small>
            </div>
            {/* <p class="mb-1">Some placeholder content in a paragraph.</p> */}
            <p>
              Venue: <small>Venue 1</small>
            </p>
            <p>
              Sport: <small>Basketball</small>
            </p>
            <p>
              Reservationist: <small>Almir Handabaka</small>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
