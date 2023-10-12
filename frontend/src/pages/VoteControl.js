import React, { useState, useCallback, useEffect } from 'react';



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

import { connect, useDispatch } from "react-redux";
import Choice from "../components/Choice";
import Voter from "../components/Voter";
import AdminVote from "../components/Admin";

import "./VoteControl.css"


function VoteControl({ jury, lastMessage }) {




  return (
    <>
      <div class="VoteControl">
        <Center>
          <Grid grow>
            <Grid.Col span={4}>
              <Center>
                <Voter jury="Bruce (Zizi)" vote={jury.jury1} img="./zizi.jpeg" juryid="jury_1"></Voter>
              </Center>
            </Grid.Col>
            <Grid.Col span={4}>
              <Center>
                <Voter jury="Ruedi (Tom)" vote={jury.jury2} img="./tom.jpeg" juryid="jury_2"></Voter>
              </Center>
            </Grid.Col>
            <Grid.Col span={4}>
              <Center>
                <Voter jury="Jaquline (Joanne)" vote={jury.jury3} img="./joanne.jpeg" juryid="jury_3"></Voter>
              </Center>
            </Grid.Col>
            <Grid.Col span={12}>
              <AdminVote></AdminVote>
            </Grid.Col>
          </Grid>
        </Center>
      </div>

    </>
  );
}

export default VoteControl;
