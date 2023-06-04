import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

const Booking = () => {
  return (
    <div className="row">
      <div className="col" style={{ width: "800px" }}>
        <FullCalendar
          height={650}
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          weekends={true}
          events={[
            { title: "event 1", date: "2023-06-01T10:30:00" },
            { title: "event 2", date: "2023-06-02" },
          ]}
        />
      </div>
      <div className="col">
        lista
      </div>
    </div>
  );
};

export default Booking;
