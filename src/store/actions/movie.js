import axios from "../../utils/axios";

export const createMovie = (data) => {
  return {
    type: "POSTMOVIE",
    payload: axios.post("movie", data)
  };
};

export const getAllMovie = (page, limit) => {
  return {
    type: "GETALLMOVIE",
    payload: axios.get(`movie?searchName=&page=${page}&limit=${limit}`)
  };
};
