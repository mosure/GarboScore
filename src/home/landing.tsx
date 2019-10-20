import React from 'react';
import {
    Grid,
    Typography,
    createStyles,
    makeStyles,
} from '@material-ui/core';

import { landingData } from '../data';

const useStyles = makeStyles(
    (theme) => createStyles({
        root: {
            minHeight: '100vh',
        },
        title: {
            color: theme.palette.secondary.main,
            marginBottom: 20,
            marginTop: '15%',
        },
        subtitle: {
            marginBottom: 40,
        },
        description: {
            maxWidth: 450,
            margin: 'auto',
        },
    }),
);

export const Landing: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            justify='center'
            direction='column'
            wrap='nowrap'
        >
            <Grid item>
                <Typography
                    variant='h1'
                    align='center'
                    className={classes.title}
                >
                    {landingData.title}
                </Typography>
                <Typography
                    variant='h3'
                    align='center'
                    className={classes.subtitle}
                >
                    {landingData.subtitle}
                </Typography>
                <Typography
                    variant='body1'
                    align='center'
                    className={classes.description}
                >
                    {landingData.description}
                </Typography>
            </Grid>
        </Grid>
    );
};
