import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import movie from "./movie";
export default combineReducers({
  movie,
  auth,
  user
});
