import React from "react";
import "./Projector.css"

import * as api from "../api"

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
import { useEventListener } from "@mantine/hooks";

function Projector() {


    return (
        <>
            <h1>Projector</h1>
            <SimpleGrid cols={3}>
                <Button variant="outline" color="white" >Position Top</Button>
                <Button variant="outline" color="white">Up Slow</Button>
                <Button variant="outline" color="white">Up Fast</Button>
                <Button variant="outline" color="white">Position Down</Button>
                <Button variant="outline" color="white">Down Slow</Button>
                <Button variant="outline" color="white">Down Fast</Button>
            </SimpleGrid>
        </>

    );
}

export default Projector;