import React, { useState, useCallback, useEffect } from 'react';

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

import useWebSocket, { ReadyState } from 'react-use-websocket';


class jurymember {
  name
  vote
}

function App({ ...props }) {
  const WS_URL = 'ws://10.0.1.128:1880/ws';

  const [jury, setJury] = useState({ jury1: null, jury2: null, jury3: null })

  const { lastMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => console.log('opened'),
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      const jsonMessage = JSON.parse(lastMessage.data)

      console.log(jsonMessage);
      switch (jsonMessage.sender) {
        case "jury_1":
          var updated = { jury1: jsonMessage.vote }
          break;
        case "jury_2":
          var updated = { jury2: jsonMessage.vote }
          break;
        case "jury_3":
          var updated = { jury3: jsonMessage.vote }
        default:
          break;
      }
      setJury(jury => ({
        ...jury,
        ...updated
      }))
    }
  }, [lastMessage, setJury])

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];


  return (
    <Router>
      <Header></Header>
      <div>
        <span>The WebSocket is currently {connectionStatus}</span>
      </div>
      <Route exact path="/" render={(props) => (<Home {...props} />)} />
      <Route exact path="/votecontrol" render={() => (<VoteControl jury={jury} lastMessage={lastMessage} />)} />
      {/* <Route path="/votecontrol" component={VoteControl} /> */}
      <Route path="/nodered" component={NodeRed} />
      <Route path="/projector" component={Projector} />
    </Router>
  );
}


export default App;
