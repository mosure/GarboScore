import React from 'react';
import {
    Grid,
    Typography,
    createStyles,
    makeStyles,
    Link,
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
                    According to
                    &nbsp;
                    <Link
                        color='secondary'
                        target='_blank'
                        href='https://www.nationalgeographic.com/news/2017/07/plastic-produced-recycling-waste-ocean-trash-debris-environment/'
                    >
                        National Geographic,
                    </Link>
                    &nbsp;
                    91% of plastics are not recycled.
                    Through household incentivization, GarboScore provides a solution.
                </Typography>
            </Grid>
        </Grid>
    );
};
