import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getToken, isAuthenticated } from "../reducers";

function PrivateRoute({ 
  component,
  isAuthenticated /* from mapStateToProps */,
  user, 
  token /* from mapStateToProps */,
  ...rest
   }) {
  if (isAuthenticated) {
    // if the user is authenticated, just render the component
    return (
      <Route
        {...rest}
        render={props =>
          React.createElement(component, { ...props, user, token })
        }
      />
    );
  } else {
    // otherwise redirect to the login page
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
    token: getToken(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
