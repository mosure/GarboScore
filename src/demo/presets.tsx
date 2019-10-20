import React from 'react';
import {
    Typography,
    makeStyles,
    createStyles,
    Grid,
    Paper,
    Box,
    Hidden,
    GridList,
    GridListTile,
} from '@material-ui/core';

import { Evaluation } from './';
import {
    evaluationData,
    demoData,
} from '../data';

const useStyles = makeStyles(
    (theme) => createStyles({
        scrollableGrid: {
            overflowX: 'auto',
        },
        gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
        },
        header: {
            color: theme.palette.text.hint,
        },
        paper: {
            padding: 16,
            borderRadius: 12,
            height: '100%',
        },
        imageContainer: {
        },
        hr: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            margin: 'auto',
            marginBottom: 32,
            '&::before': {
                backgroundColor: theme.palette.text.hint,
                content: '""',
                display: 'block',
                height: 2,
                position: 'relative',
                verticalAlign: 'middle',
                width: 100,
                maxWidth: 200,
                marginRight: 10,
                top: 3,
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                },
            },
            '&::after': {
                backgroundColor: theme.palette.text.hint,
                content: '""',
                display: 'block',
                height: 2,
                position: 'relative',
                verticalAlign: 'middle',
                width: 100,
                maxWidth: 200,
                marginLeft: 10,
                top: 3,
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                },
            },
        },
    }),
);

export const Presets = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.hr}>
                <Typography
                    variant='h3'
                    align='center'
                    className={classes.header}
                >
                    {demoData.presetsHeader}
                </Typography>
            </Box>
            <Grid
                container
                justify='center'
                spacing={4}
                wrap='nowrap'
                className={classes.scrollableGrid}
            >
                {
                    evaluationData.map((evalutation, index) => {
                        return (
                            <Grid
                                item
                                key={index}
                                xs={4}
                            >
                                <Paper
                                    elevation={8}
                                    className={classes.paper}
                                >
                                    <Evaluation {...evalutation}/>
                                </Paper>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </>
    );
};
