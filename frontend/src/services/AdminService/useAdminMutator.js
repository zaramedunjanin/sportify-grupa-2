import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "./adminService";
import { getDataList } from "./useAdminFetcher";
export const deleteData = (id, page) => {
  axios
    .delete(`${baseURL}/tables/${page}/delete/${id}/`, {})
    .then((response) => {})
    .catch((e) => {
      console.error(e);
    });
};
