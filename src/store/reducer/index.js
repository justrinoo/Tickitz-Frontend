import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import movie from "./movie";
import premiere from "./premiere";
export default combineReducers({
  premiere,
  movie,
  auth,
  user
});
