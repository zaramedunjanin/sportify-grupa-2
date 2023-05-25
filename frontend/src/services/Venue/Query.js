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
    //const data = await response.json();
    return response;
  } catch (error) {
    // Handle any errors that occur during the API call or data fetching
    console.log(error);
    throw new Error("Failed to fetch venues");
  }

  //return [{ venue_name: "Venue 1", id: 1 }, { venue_name: "Venue 2", id: 2 }, { venue_name: "Venue 3", id: 3 }]

  // return Promise.resolve({ data: [{ venue_name: "Venue 1", id: 1 }, { venue_name: "Venue 2", id: 2 }, { venue_name: "Venue 3", id: 3 }] });
};

export default getAllVenues;
