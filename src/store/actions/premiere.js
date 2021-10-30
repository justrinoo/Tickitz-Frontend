import axios from "../../utils/axios";

export const getAllPremiere = (page, limit) => {
  return {
    type: "GETALLPREMIERE",
    payload: axios.get(`schedule?page=${page}&limit=${limit}`)
  };
};
export const postPremiere = (data) => {
  return {
    type: "POSTPREMIERE",
    payload: axios.get("schedule/create", data)
  };
};
