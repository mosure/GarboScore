import React from 'react';
import {
    Box,
    Toolbar,
    Container,
    makeStyles,
    createStyles,
    Typography,
    Button,
    Grid,
} from '@material-ui/core';

import { demoData } from '../data';

const useStyles = makeStyles(
    (theme) => createStyles({
        demo: {
            paddingTop: 25,
            marginBottom: 50,
        },
        title: {
            color: theme.palette.secondary.main,
            marginBottom: 20,
            marginTop: '5%',
        },
        description: {
            maxWidth: 450,
            margin: 'auto',
        },
        center: {
            margin: 'auto',
        },
        container: {
            paddingTop: '32px',
        },
    }),
);

const Demo: React.FC = () => {
    const classes = useStyles();

    return (
        <Box minHeight='100vh'>
            <Toolbar/>
            <Container
                maxWidth='lg'
                className={classes.demo}
            >
                <Typography
                    variant='h1'
                    align='center'
                    className={classes.title}
                >
                    {demoData.title}
                </Typography>
                <Typography
                    variant='h6'
                    align='center'
                    className={classes.description}
                >
                    {demoData.description}
                </Typography>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    spacing={4}
                    className={classes.container}
                >
                    <Grid item>
                        <Button
                            variant='outlined'
                            color='secondary'
                            size='large'
                        >
                            Upload Image
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Demo;
