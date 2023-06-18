import axios from "axios";
import { baseURL } from "./adminService";

export const getDataList = async (page) => {
  const response = await axios.get(`${baseURL}/tables/${page}/`).catch((e) => {
    console.error(e);
  });
  return response.data;
};
