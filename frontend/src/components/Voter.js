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

import * as api from "../api"
import { useEventListener } from '@mantine/hooks';


import Choice from "./Choice";
import "./Voter.css"



function Vote({ jury, vote, img, juryid }) {

    const redbtn = useEventListener('click', () => {
        api.setVote(juryid, 1);
    });
    const resetbtn = useEventListener('click', () => {
        api.setVote(juryid, 0);
    });
    const greenbtn = useEventListener('click', () => {
        api.setVote(juryid, 2);
    });


    return (
        <Group>
            <div class="voter" id={vote}>
                <p>{jury}</p>
                <SimpleGrid cols={1}>
                    <Choice vote={vote} img={img} ></Choice>
                    <Center>
                        <SimpleGrid cols={3} verticalSpacing="xl">
                            <Button ref={redbtn} variant="outline" color="rgba(255, 0, 0, 1)">FAIL</Button>
                            <Button ref={resetbtn} variant="outline" color="rgba(40, 120, 255, 1)">RESET</Button>
                            <Button ref={greenbtn} variant="outline" color="rgba(0, 255, 0, 1)">PASS</Button>
                        </SimpleGrid>
                    </Center>
                </SimpleGrid>
            </div>
        </Group >
    );
}

export default Vote;