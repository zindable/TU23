import React from "react";
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


function VoteControl({ ...props }) {
  return (
    <>
      <Center>
        <SimpleGrid cols={3}>
          <Voter jury="Bruce (Zizi)"></Voter>
          <Voter jury="Ruedi (Tom)" ></Voter>
          <Voter jury="Jaquline (Joanne)"></Voter>
        </SimpleGrid>
      </Center>
      <AdminVote></AdminVote>
    </>
  );
}

export default VoteControl;
