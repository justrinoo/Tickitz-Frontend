import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthentication = localStorage.getItem("token");

  /*
    jika isAuthenticated = false => restricted akan menjadi false
  */
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthentication && restricted ? <Redirect to="/basic-home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
