import axios from "axios";
import { baseURL } from "./adminService";

export const getDataList = (setData, page) => {
  axios
    .get(`${baseURL}/tables/${page}/`)
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => {
      console.error(e);
    });
};
