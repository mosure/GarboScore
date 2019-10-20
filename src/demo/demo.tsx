import React, { useState } from 'react';
import ReactGA from 'react-ga';
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
    SnackbarContent,
    TextField,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { ImagePicker } from 'react-file-picker';

import { demoData } from '../data';
import { computeScore } from '../shared/service';
import { Presets } from './';
import { Evaluation } from '../data/demo/scores';
import { Addresses } from './addresses';
import { Evaluation as EvalComp } from './evaluation';

const logUploadButton = () => {
    ReactGA.event({
        category: 'Button',
        action: 'Upload Image',
        label: 'Demo',
    });
};

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
            userSelect: 'none',
        },
        description: {
            maxWidth: 450,
            margin: 'auto',
            marginBottom: 40,
        },
        center: {
            margin: 'auto',
        },
        container: {
            paddingTop: '32px',
            paddingBottom: '32px',
        },
        close: {
            padding: theme.spacing(0.5),
            color: 'white',
        },
        error: {
            backgroundColor: theme.palette.error.dark,
            color: 'white',
        },
        customViewer: {
            height: '400px',
            marginBottom: 15,
        },
        textField: {
            width: 200,
        },
    }),
);

export const Demo: React.FC = () => {
    const classes = useStyles();

    const initializer: Evaluation = {
        imgAlt: '',
        imgSrc: '',
        isLoaded: false,
        payload: [],
        score: 0,
    };

    const [errState, setErrState] = useState({
        snackBarOpen: false,
        snackBarMessage: '',
    });

    const [state, setState] = useState({
        evaluation: initializer,
    });

    const [addressObj, setAddressObj] = useState({
        address: '',
    });

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddressObj({
            address: event.target.value,
        });
    };

    const fileConfirmed = (base64: string) => {
        // Set state to the correct response with image
        const evaluation: Evaluation = {
            imgAlt: addressObj.address,
            imgSrc: base64,
            isLoaded: false,
            payload: [],
            score: 0,
        };

        setState({
            evaluation,
        });

        computeScore({
            address: addressObj.address,
            image: base64.split(',')[1], // Strip out the type
        }).then((result) => {
            evaluation.payload = result.result[0].payload;
            evaluation.score = result.score;
            evaluation.isLoaded = true;

            setState({
                evaluation,
            });
        }).catch(() => snackbarError('Error Processing Image.'));
    };

    const snackbarError = (error: string) => {
        setErrState({
            snackBarOpen: true,
            snackBarMessage: error,
        });
    };

    const snackBarClose = () => {
        setErrState({
            snackBarOpen: false,
            snackBarMessage: '',
        });

        const evalObj = state.evaluation;

        evalObj.isLoaded = true;

        setState({
            evaluation: evalObj,
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
                    <Presets/>
                    <Grid
                        container
                        direction='column'
                        alignItems='center'
                        spacing={4}
                        className={classes.container}
                    >
                        <Grid item>
                            <TextField
                                id='standard-name'
                                label='Address'
                                className={classes.textField}
                                value={addressObj.address}
                                onChange={handleAddressChange}
                                margin='normal'
                                color='secondary'
                            />
                        </Grid>
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
                                    onClick={logUploadButton}
                                >
                                    Upload Image
                                </Button>
                            </ImagePicker>
                        </Grid>
                        <Grid item className={classes.customViewer}>
                            <Box p={4} borderColor='secondary.main' borderRadius={16} border={1}>
                                <EvalComp {...state.evaluation}/>
                                <Typography
                                        variant='body1'
                                        align='center'
                                >
                                    {`Score: ${state.evaluation.score}`}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Addresses/>
                </Container>
            </Box>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={errState.snackBarOpen}
                autoHideDuration={6000}
                onClose={snackBarClose}
            >
                <SnackbarContent
                    className={classes.error}
                    action={[
                        <IconButton
                            key='close'
                            aria-label='close'
                            className={classes.close}
                            onClick={snackBarClose}
                        >
                            <Close/>
                        </IconButton>,
                    ]}
                    message={<span>{errState.snackBarMessage}</span>}
                />
            </Snackbar>
        </>
    );
};
