// all requests will go through this service
// TODO: add get, post, put and delete methodss
// TODO: make api path an ENV variables
// TODO: handle token attachment and expiration here
import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: baseURL,
  // headers: {
  //   'Authorization': `Bearer ${token}`
  // }
});

if (token)
  instance.headers = {
    'Authorization': `Bearer ${token}`
  }

export default instance;
