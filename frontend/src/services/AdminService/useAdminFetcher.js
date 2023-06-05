import axios from "axios";
import { baseURL } from "./adminService";

export const getDataList =async (setData, page) => {
  await axios
    .get(`${baseURL}/tables/${page}/`)
    .then((res) => {
        setData(res.data);
    })
    .catch((e) => {
      console.error(e);
    });
};
