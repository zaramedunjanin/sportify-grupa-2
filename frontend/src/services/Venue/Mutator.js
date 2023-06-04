import axios from "../HttpService/HttpService";

const addVenue = async (venue) => {
  try {
    const response = await axios.post("venue/company/add", {
      params: venue,
    });
    return response;
  } catch (error) {
    throw new Error("Failed to add new venue");
  }
};

const updateVenue = async (venue) => {
  try {
    const response = await axios.get("venue/company/update", {
      params: venue,
    });
    return response;
  } catch (error) {
    throw new Error("Failed to fetch venues");
  }
};

const deleteVenue = async (venue) => {
    try {
      const response = await axios.get("venue/company/delete", {
        params: venue,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to fetch venues");
    }
  };


export default getAllVenues;
