import axios from "../HttpService/HttpService";

const getAllVenues = async (filters, searchText) => {
  try {
    const options =
      (searchText && searchText.length) > 0
        ? { ...filters, ["searchText"]: searchText }
        : filters;
    const response = await axios.get("venue/all", {
      params: options,
    });
    return response;
  } catch (error) {
    throw new Error("Failed to fetch venues");
  }
};

export default getAllVenues;
