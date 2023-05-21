import axios from "../HttpService/HttpService";

const getAllVenues = (search) => {
  return axios.get('venue/all', { params: search });
}

export default getAllVenues;