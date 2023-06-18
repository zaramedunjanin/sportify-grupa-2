import axios from "../HttpService/HttpService";

export const getReservationsByCompany = async () => {
  try {
    const response = await axios.get("reservation/all");
    return response;
  } catch (error) {
    console.log("Failed to fetch reservations");
  }
};

export const getBookingsByVenueId = async (venue_id) => {
  try {
    const response = await axios.get("reservation/venue", {
      params: { venue_id: venue_id },
    });
    return response;
  } catch (error) {
    console.log("Failed to fetch reservations");
  }
};

export const acceptReservation = async (reservation_id) => {
  try {
    const response = await axios.put("reservation/accept", {
      reservation_id: reservation_id,
    });
    return response;
  } catch (error) {
    console.log("Failed to fetch reservations");
  }
};

export const rejectReservation = async (reservation_id) => {
  try {
    const response = await axios.put("reservation/reject", {
      reservation_id: reservation_id,
    });
    return response;
  } catch (error) {
    console.log("Failed to fetch reservations");
  }
};
