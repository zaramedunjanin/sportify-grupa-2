import { baseURL } from "../AdminService/adminService";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserReservations = async (id) => {
  const response = await axios
    .get(`${API_BASE_URL}/reservation/${id}/`)
    .catch((e) => {
      console.error(e);
    });
  return response.data;
};

export const join = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
