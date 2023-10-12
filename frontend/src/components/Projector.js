import React, { useState, useCallback, useEffect } from 'react';
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
    Space,
    Grid,
} from '@mantine/core';

import { IconArrowBadgeUp, IconArrowBadgeDown, IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons-react';
import { IconArrowBigUpLine, IconArrowBigDownLine, IconArrowBigLeftLine, IconArrowBigRightLine } from '@tabler/icons-react';

import { useEventListener } from "@mantine/hooks";

function Projector() {


    const [shutter, setShutter] = useState()

    useEffect(() => {
        api.getShutterState().then(result => setShutter(result.shutter))
        const interval = setInterval(() => api.getShutterState(), 5000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    const moveProjectorUpFast = useEventListener('click', () => {
        api.moveProjector("up", 3)
    });
    const moveProjectorUpSlow = useEventListener('click', () => {
        api.moveProjector("up", 1)
    });
    const moveProjectorDownFast = useEventListener('click', () => {
        api.moveProjector("down", 3)
    });
    const moveProjectorDownSlow = useEventListener('click', () => {
        api.moveProjector("down", 1)
    });
    const moveProjectorLeftFast = useEventListener('click', () => {
        api.moveProjector("left", 3)
    });
    const moveProjectorLeftSlow = useEventListener('click', () => {
        api.moveProjector("left", 1)
    });
    const moveProjectorRightFast = useEventListener('click', () => {
        api.moveProjector("right", 3)
    });
    const moveProjectorRightSlow = useEventListener('click', () => {
        api.moveProjector("right", 1)
    });


    return (
        <>
            <div class="projector">

                <SimpleGrid cols={3}>
                    <div class="section">
                        <SimpleGrid id="verticalalign" cols={1}>
                            <Button variant="outline" color="white" >Position Circle</Button>
                            <Button variant="outline" color="white">Home</Button>
                            <Button variant="outline" color="white">Position Stage</Button>
                        </SimpleGrid>
                    </div>
                    <div class="section">
                        <Grid>
                            <Grid.Col span={12}><Center><Button ref={moveProjectorUpFast} variant="outline" color="white"><IconArrowBadgeUp></IconArrowBadgeUp></Button></Center></Grid.Col>
                            <Grid.Col span={12}><Center><Button ref={moveProjectorUpSlow} variant="outline" color="white"><IconArrowBigUpLine></IconArrowBigUpLine></Button></Center></Grid.Col>
                            <Grid.Col span={3}><Center><Button ref={moveProjectorLeftFast} variant="outline" color="white"><IconArrowBigLeftLine></IconArrowBigLeftLine></Button></Center></Grid.Col>
                            <Grid.Col span={3}><Center><Button ref={moveProjectorLeftSlow} variant="outline" color="white"><IconArrowBadgeLeft></IconArrowBadgeLeft></Button></Center></Grid.Col>
                            <Grid.Col span={3}><Center><Button ref={moveProjectorRightSlow} variant="outline" color="white"><IconArrowBadgeRight></IconArrowBadgeRight></Button></Center></Grid.Col>
                            <Grid.Col span={3}><Center><Button ref={moveProjectorRightFast} variant="outline" color="white"><IconArrowBigRightLine></IconArrowBigRightLine></Button></Center></Grid.Col>
                            <Grid.Col span={12}><Center><Button ref={moveProjectorDownSlow} variant="outline" color="white"><IconArrowBadgeDown></IconArrowBadgeDown></Button></Center></Grid.Col>
                            <Grid.Col span={12}><Center><Button ref={moveProjectorDownFast} variant="outline" color="white"><IconArrowBigDownLine></IconArrowBigDownLine></Button></Center></Grid.Col>
                        </Grid>
                    </div>
                    <div class="section">
                        <SimpleGrid id="verticalalign" cols={1}>
                            <span>Shutter Status: {shutter}</span>
                            <Button variant="outline" color="white">Open</Button>
                            <Button variant="outline" color="white">Close</Button>
                        </SimpleGrid>
                    </div>


                </SimpleGrid >
            </div>




        </>

    );
}

export default Projector;