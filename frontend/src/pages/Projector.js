import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import { connect } from "react-redux";

function Projector({ ...props }) {
  return (
    <iframe src="http://192.168.1.33" height="900px" width="100%"></iframe>
  );
}

export default Projector;


