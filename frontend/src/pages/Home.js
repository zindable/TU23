import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { Redirect } from "react-router";

import { connect } from "react-redux";

const Home = ( ) => (
  <Redirect to="/votecontrol" />
);

export default Home;
