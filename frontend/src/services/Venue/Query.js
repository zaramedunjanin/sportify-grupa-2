import axios from "../HttpService/HttpService";

const getAllVenues = (options) => {
  console.log(options)
  return axios.get('venue/all', { params: options }).then((res) => {
    return res.data;
  });

  //return [{ venue_name: "Venue 1", id: 1 }, { venue_name: "Venue 2", id: 2 }, { venue_name: "Venue 3", id: 3 }]

  // return Promise.resolve({ data: [{ venue_name: "Venue 1", id: 1 }, { venue_name: "Venue 2", id: 2 }, { venue_name: "Venue 3", id: 3 }] });

}

export default getAllVenues;