import { useState } from 'react';
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
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Clock from './Clock';

const links = [
    { link: '/votecontrol', label: 'Vote Control' },
    { link: '/nodered', label: 'NodeRed' },
];


function Header() {
    const [active, setActive] = useState(links[0].link);
    const location = useLocation();

    const { hash, pathname, search } = location;


    const items = links.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            className={classes.link}
            data-active={pathname === link.link || undefined}
        >
            {link.label}
        </Link>
    ));


    return (
        <Box bg="black">
            <Group justify="space-between" h="100%">

                <img src="./logo.jpg" width="auto" height="80" />

                <Group justify="space-between" h="100%">
                    <div className={classes.inner}>
                        <Group gap={20} visibleFrom="sm">
                            {items}
                        </Group>
                    </div>
                </Group>

                <Clock></Clock>

            </Group>
        </Box>
    );
}

export default Header;