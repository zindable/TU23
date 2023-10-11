import React from "react";
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
} from '@mantine/core';

import "./AdminVote.css"
import Projector from "../components/Projector";

import * as api from "../api"
import { useEventListener } from '@mantine/hooks';




function AdminVote() {



    const redbtn = useEventListener('click', () => {
        api.setAllVotes(1);
    });
    const resetbtn = useEventListener('click', () => {
        api.setAllVotes(0);
    });
    const greenbtn = useEventListener('click', () => {
        api.setAllVotes(2);
    });


    return (
        <>
            <div class="AdminVote">
                <div class="container">
                    <SimpleGrid cols={1} verticalSpacing="xl" bg="black">
                        <h1 class="admintitle">Admin Vote</h1>
                        <SimpleGrid cols={3} verticalSpacing="xl">
                            <Button ref={redbtn} variant="outline" size="md" color="rgba(255, 0, 0, 1)">Red</Button>
                            <Button ref={resetbtn} variant="filled" size="md" color="rgba(40, 120, 255, 1)">Reset</Button>
                            <Button ref={greenbtn} variant="outline" size="md" color="rgba(0, 255, 0, 1)">Green</Button>
                        </SimpleGrid>
                        <Projector></Projector>
                    </SimpleGrid>
                </div>
            </div>

        </>
    );
}

export default AdminVote;