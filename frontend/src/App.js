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
import Header from "./components/Header.js";
import NodeRed from "./pages/NodeRed.js";
import Projector from "./pages/Projector.js";

function App({ ...props }) {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/" render={(props) => (<Home {...props} />)} />
      <Route path="/login" component={Login} />
      <Route path="/votecontrol" component={VoteControl} />
      <Route path="/nodered" component={NodeRed} />
      <Route path="/projector" component={Projector} />
    </Router>
  );
}

export default App;
