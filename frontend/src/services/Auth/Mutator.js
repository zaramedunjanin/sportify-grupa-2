// POST, PUT and DELETE goes here

import axios from "../HttpService/CustomAxios";

const RegisterUser = (user) => {
  return axios.post('auth/signup', { ...user });
}

export default RegisterUser;