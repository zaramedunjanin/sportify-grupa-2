import axios from "../HttpService/HttpService";

export const addVenue = async (venue) => {
  try {
    const response = await axios.post("venue/company/add", {
      params: venue,
    });
    return response;
  } catch (error) {
    throw new Error("Failed to add new venue");
  }
};

export const updateVenue = async (venue) => {
  try {
    const response = await axios.get("venue/company/update", {
      params: venue,
    });
    return response;
  } catch (error) {
    throw new Error("Failed to fetch venues");
  }
};

export const deleteVenue = async (venue) => {
  try {
    const response = await axios.delete("venue/company/delete", {
      params: { id: venue.id },
    });
    return response;
  } catch (error) {
    throw new Error("Failed to fetch venues");
  }
};
