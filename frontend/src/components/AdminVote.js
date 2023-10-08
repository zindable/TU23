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


function AdminVote() {

    return (
        <>
            <div class="AdminVote">
                <div class="container">
                    <SimpleGrid cols={1} verticalSpacing="xl" bg="black">
                        <h1 class="admintitle">Admin Vote</h1>
                        <SimpleGrid cols={3} verticalSpacing="xl">
                            <Button variant="outline" size="md" color="rgba(255, 0, 0, 1)">Red</Button>
                            <Button variant="outline" size="md" color="rgba(40, 120, 255, 1)">Reset</Button>
                            <Button variant="outline" size="md" color="rgba(0, 255, 0, 1)">Green</Button>
                        </SimpleGrid>
                        <Projector></Projector>
                    </SimpleGrid>
                </div>
            </div>

        </>
    );
}

export default AdminVote;