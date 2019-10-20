import React from 'react';
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
} from './';

const useStyles = makeStyles(
    (theme) => createStyles({
        landing: {
            paddingTop: 25,
            marginBottom: 50,
        },
    }),
);

export const Home: React.FC = () => {
    const classes = useStyles();
    return (
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
    );
};
