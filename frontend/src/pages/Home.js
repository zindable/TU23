import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { Redirect } from "react-router";
import { Button, Grid, Header, Segment } from "semantic-ui-react";

import { connect } from "react-redux";

const Home = ( ) => (
  <Grid className="HomeScreen" verticalAlign="middle" centered={true}>
    <Grid.Column>
      <Header as="h2" content="Root" />
      <Segment stacked={true}>
        <Header as="h3" content="Root" />
        {true ? (
          <Redirect to="/votecontrol" />
        ) : (
          <div>
            <Button
              style={{ marginBottom: "1em" }}
              fluid
              primary
              as={Link}
              to={"/login"}
              content="Einloggen"
            />
            <p>
              Falls Sie noch keinen Account besitzen können Sie sich hier
              registrieren:
            </p>
            <Button fluid as={Link} to={"/signup"} content="Registrieren" />
          </div>
        )}
      </Segment>
    </Grid.Column>
  </Grid>
);

export default Home;
