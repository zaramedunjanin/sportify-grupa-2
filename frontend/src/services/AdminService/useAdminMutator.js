import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "./adminService";
import { getDataList } from "./useAdminFetcher";
export const deleteData = async (id, page) => {
  axios
    .delete(`${baseURL}/tables/${page}/delete/${id}/`, {})
    .then((response) => {})
    .catch((e) => {
      console.error(e);
    });
};

export const updateData = (data, page) => {
    axios
        .put(`${baseURL}/tables/${page}/update/${data.id}/`, data)

        .catch((error) => {
            console.log(error.response);
        });
};
export const addData = (data, page) => {
    axios
        .post(`${baseURL}/tables/${page}/add/`, data)
        .catch((error) => {
            console.log(error.response);
        });
};

export const declineCompany = (data, page) => {
  data.verified = false;
  axios
    .put(`${baseURL}/tables/${page}/update/${data.id}/`, data)
    .then((response) => {})
    .catch((e) => {
      console.error(e);
    });
};

export const acceptCompany = (data, page) => {
  data.verified = true;
  axios
    .put(`${baseURL}/tables/${page}/update/${data.id}/`, data)
    .then((response) => {})
    .catch((e) => {
      console.error(e);
    });
};
