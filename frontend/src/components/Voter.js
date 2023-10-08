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


import Choice from "./Choice";
import "./Voter.css"



function Vote({ jury, vote }) {

    return (

        <Group>
            <div class="voter" id={vote}>
                <p>{jury}</p>
                <SimpleGrid cols={1}>
                    <Choice></Choice>
                    <Center>
                        <SimpleGrid cols={3} verticalSpacing="xl">
                            <Button variant="outline" color="rgba(255, 0, 0, 1)">Red</Button>
                            <Button variant="outline" color="rgba(40, 120, 255, 1)">Reset</Button>
                            <Button variant="outline" color="rgba(0, 255, 0, 1)">Green</Button>
                        </SimpleGrid>
                    </Center>
                </SimpleGrid>
            </div>
        </Group>
    );
}

export default Vote;