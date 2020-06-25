import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Token } from "../utils";

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(props) => {
      return Token.get() ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);

export default PrivateRoute;
