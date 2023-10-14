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
    Grid,
} from '@mantine/core';

import "./Admin.css"
import Projector from "./Projector";

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
                        <div class="admin1">
                            <Grid>
                                <Grid.Col span={3} >
                                    <div class="adminVoteContainer">
                                        <SimpleGrid cols={2}>
                                            <Button variant="filled" size="md" color="rgba(200, 0, 0, 1)">ARM</Button>
                                            <Button variant="filled" size="md" color="rgba(40, 120, 255, 1)">DISARM</Button>
                                        </SimpleGrid>
                                    </div>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <div class="adminVoteContainer">

                                        <SimpleGrid cols={3}>
                                            <Button ref={redbtn} variant="filled" size="md" color="rgba(200, 0, 0, 1)">FAIL</Button>
                                            <Button ref={resetbtn} variant="filled" size="md" color="rgba(40, 120, 255, 1)">RESET</Button>
                                            <Button ref={greenbtn} variant="filled" size="md" color="rgba(0, 180, 0, 1)">PASS</Button>
                                        </SimpleGrid>
                                    </div>
                                </Grid.Col>

                                <Grid.Col span={3} >
                                    <div class="adminVoteContainer">
                                        <div class="ArmedState">Armed</div>
                                    </div>
                                </Grid.Col>
                            </Grid>
                        </div>
                        <Projector></Projector>
                    </SimpleGrid>
                </div>
            </div >

        </>
    );
}

export default AdminVote;