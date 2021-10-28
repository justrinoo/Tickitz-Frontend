import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogged = localStorage.getItem("token");
  return (
    <>
      <Route
        {...rest}
        render={(props) => (isLogged ? <Component {...props} /> : <Redirect to="/login" />)}
      />
    </>
  );
}
