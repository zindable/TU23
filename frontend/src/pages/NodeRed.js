import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";

import { connect } from "react-redux";

function NodeRed({ ...props }) {
  return (
    <><h1>NodeRed</h1><iframe src="https://nodered.tu23.ch" height="900px" width="100%"></iframe></>
  );
}

export default NodeRed;

