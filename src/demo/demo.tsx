import React, { useState } from 'react';
import {
    Box,
    Toolbar,
    Container,
    makeStyles,
    createStyles,
    Typography,
    Button,
    Grid,
    Snackbar,
} from '@material-ui/core';
import { ImagePicker } from 'react-file-picker';

import { demoData } from '../data';
import { computeScore, ScoreResult } from '../shared/service';

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
    const [state, setState] = useState({
        snackBarOpen: false,
        snackBarMessage: '',
        base64Image: '',
    });

    const fileConfirmed = (base64: string) => {
        computeScore({
            address: 'TEST',
            callback: (result: ScoreResult) => {
                // tslint:disable-next-line:no-console
                console.log(result);
            },
            image: base64,
        });
    };

    const fileError = (error: string) => {
        setState({
            snackBarOpen: true,
            snackBarMessage: error,
            base64Image: '',
        });
    };

    const snackBarClose = () => {
        setState({
            snackBarOpen: false,
            snackBarMessage: '',
            base64Image: '',
        });
    };

    return (
        <>
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
                            <ImagePicker
                                extensions={['jpg', 'jpeg', 'png']}
                                dims={{minWidth: 100, maxWidth: 1000, minHeight: 100, maxHeight: 1000}}
                                onChange={fileConfirmed}
                                onError={fileError}
                            >
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    size='large'
                                >
                                    Upload Image
                                </Button>
                            </ImagePicker>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={state.snackBarOpen}
                autoHideDuration={6000}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                onClose={snackBarClose}
                message={<span id='message-id'>{state.snackBarMessage}</span>}
            />
        </>
    );
};

export default Demo;
