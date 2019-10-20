import React from 'react';
import posed from 'react-pose';
import {
    Container,
    Toolbar,
    Box,
    makeStyles,
    createStyles,
} from '@material-ui/core';

import {
    Landing,
    Dependencies,
    Timeline,
} from './';

const useStyles = makeStyles(
    (theme) => createStyles({
        landing: {
            paddingTop: 25,
            marginBottom: 50,
        },
    }),
);

export const DropFade = posed.div({
    load: {
        y: '0px',
        opacity: 1,
        delay: (props: any) => props.delay || 0,
        beforeChildren: (props: any) => props.beforeChildren || false,
        staggerChildren: (props: any) => props.staggerChildren || 0,
        transition: {
            duration: 500,
        },
    },
    init: {
        y: '-100px',
        opacity: 0,
        transition: {
            duration: 500,
        },
    },
});

export const DisplayNone = posed.div({
    load: {
        applyAtStart: { display: 'block' },
        beforeChildren: true,
        staggerChildren: 150,
    },
    init: {
        applyAtEnd: { display: 'none' },
    },
});

export const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Box minHeight='100vh'>
                <Toolbar/>
                <Container
                    maxWidth='lg'
                    className={classes.landing}
                >
                    <Landing/>
                </Container>
                <Dependencies/>
            </Box>
            <Container maxWidth='lg'>
                <Timeline/>
            </Container>
        </>
    );
};
