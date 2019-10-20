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
    IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { ImagePicker } from 'react-file-picker';

import { demoData } from '../data';
import { computeScore, ScoreResult } from '../shared/service';
import { Evaluation } from '../data/demo/scores';

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
        close: {
            padding: theme.spacing(0.5),
        },
        error: {
            backgroundColor: theme.palette.error.dark,
        },
    }),
);

const Demo: React.FC = () => {
    const classes = useStyles();

    const initializer: Evaluation = {
        imgAlt: '',
        imgSrc: '',
        isLoaded: false,
        payload: [],
    };

    const [state, setState] = useState({
        snackBarOpen: false,
        snackBarMessage: '',
        evaluation: initializer,
    });

    const fileConfirmed = (base64: string) => {
        computeScore({
            address: 'TEST',
            callback: (result?: ScoreResult) => {
                if (!result) {
                    snackbarError('Error Processing Image.');
                    return;
                }

                // Set state to the correct response with image
                const evaluation: Evaluation = {
                    imgAlt: '',
                    imgSrc: base64,
                    isLoaded: false,
                    payload: result.result,
                };

                setState({
                    snackBarOpen: false,
                    snackBarMessage: '',
                    evaluation,
                });
            },
            image: base64.split(',')[1], // Strip out the type
        });
    };

    const snackbarError = (error: string) => {
        setState({
            snackBarOpen: true,
            snackBarMessage: error,
            evaluation: initializer,
        });
    };

    const snackBarClose = () => {
        setState({
            snackBarOpen: false,
            snackBarMessage: '',
            evaluation: initializer,
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
                                onError={snackbarError}
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
                className={classes.error}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={state.snackBarOpen}
                autoHideDuration={6000}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                action={[
                    <IconButton
                        key='close'
                        aria-label='close'
                        color='inherit'
                        className={classes.close}
                        onClick={snackBarClose}
                    >
                        <Close/>
                    </IconButton>,
                ]}
                onClose={snackBarClose}
                message={<span id='message-id'>{state.snackBarMessage}</span>}
            />
        </>
    );
};

export default Demo;
