import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthentication = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthentication ? <Component {...props} /> : <Redirect to="/basic-login" />
      }
    />
  );
};

export default PrivateRoute;
