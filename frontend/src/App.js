import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import Home from "./pages/Home.js";
import VoteControl from "./pages/VoteControl.js";
import Login from "./pages/Login.js";
import Clock from "./components/Clock.js";
import { connect } from "react-redux";
import NodeRed from "./pages/NodeRed.js";

function App({ ...props }) {
  return (
    <Router>
        <Clock></Clock>
        <Route exact path="/" render={(props) => (<Home {...props} />)}/>
        <Route path="/login" component={Login} />
        <Route path="/votecontrol" component={VoteControl} />
        <Route path="/nodered" component={NodeRed} />
    </Router>
  );
}

export default App;
