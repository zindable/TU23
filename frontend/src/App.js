import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";

import Home from "./pages/Home.js";
import VoteControl from "./pages/VoteControl.js";
import Login from "./pages/Login.js";
import Clock from "./components/Clock.js";
import { connect } from "react-redux";
import NodeRed from "./pages/NodeRed.js";

function App({ ...props }) {
 const MenuBar = withRouter(({ history, location: { pathname } }) => {
    console.log(pathname)
    console.log("pathname")
    if (true) {
      return (
        <Segment.Group style={{ marginTop: "1em" }}>
            <Menu pointing secondary color="blue">
              <Menu.Item
                name="Vote Control"
                active={pathname === "/votecontrol"}
                as={Link}
                to="/votecontrol"
                />
              <Menu.Item
                name="Node Red"
                active={pathname === "/nodered"}
                as={Link}
                to="/nodered"
                />
            <Menu.Menu position="right">
              <Clock></Clock>
            </Menu.Menu>
              </Menu>
        </Segment.Group>
      );
    } else {
      return null;
    }
  });
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route exact path="/" render={(props) => (<Home {...props} />)}/>
        <Route path="/login" component={Login} />
        <Route path="/votecontrol" component={VoteControl} />
        <Route path="/nodered" component={NodeRed} />
      </Container>
    </Router>
  );
}

export default App;
