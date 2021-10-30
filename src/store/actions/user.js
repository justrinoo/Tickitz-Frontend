import axios from "../../utils/axios";
export const GetUser = () => {
  return {
    type: "GETUSER",
    payload: axios.get("user")
  };
};

export const updatePassword = (data) => {
  return {
    type: "UPDATEPASSWORD",
    payload: axios.patch("auth/update-password", data)
  };
};

export const getDashboard = (movieId, location, premiere) => {
  return {
    type: "GETDASHBOARD",
    payload: axios.get(`user/dashboard?movieId=${movieId}&location=${location}&premier=${premiere}`)
  };
};
