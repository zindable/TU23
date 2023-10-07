import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import { connect } from "react-redux";

function NodeRed({ ...props }) {
  return (
    <iframe src="https://nodered.tu23.ch" height="900px" width="100%"></iframe>
  );
}

export default NodeRed;


