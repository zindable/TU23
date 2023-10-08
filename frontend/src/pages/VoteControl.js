import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Menu,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Grid,
  Center,
  Box,
  Container,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Space
} from '@mantine/core';

import { connect } from "react-redux";
import Choice from "../components/Choice";
import Voter from "../components/Voter";
import AdminVote from "../components/AdminVote";

import useWebSocket from 'react-use-websocket';
const WS_URL = 'ws://10.0.1.128:1880/ws/jury-ctrl';



function VoteControl({ ...props }) {

  const message = useState('');
  useWebSocket(WS_URL, {
    onMessage: (message) => {
      console.log(message.data)
    },
    // share: true,
    // filter: () => false,
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onClose: () => {
      console.log('WebSocket connection closed.');
    }
  });


  return (
    <>
      <Center>
        <Grid grow>
          <Grid.Col span={4}>
            <Center>
              <Voter jury="Bruce (Zizi)" vote=""></Voter>
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Voter jury="Ruedi (Tom)" vote="" ></Voter>
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Voter jury="Jaquline (Joanne)" vote=""></Voter>
            </Center>
          </Grid.Col>
          <Grid.Col span={12}>
            <AdminVote></AdminVote>
          </Grid.Col>
        </Grid>
      </Center>

    </>
  );
}

export default VoteControl;
