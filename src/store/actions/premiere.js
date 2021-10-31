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
    payload: axios.post("schedule/create", data)
  };
};

export const deletePremiere = (id) => {
  return {
    type: "DELETEPREMIERE",
    payload: axios.delete(`schedule/delete/${id}`)
  };
};
