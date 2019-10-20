import React from 'react';
import ReactGA from 'react-ga';
import {
    Grid,
    Typography,
    createStyles,
    makeStyles,
    Link,
} from '@material-ui/core';

import { landingData } from '../data';
import { DropFade } from './';

const useStyles = makeStyles(
    (theme) => createStyles({
        root: {
            minHeight: '100vh',
        },
        title: {
            color: theme.palette.secondary.main,
            marginBottom: 20,
            marginTop: '10%',
            userSelect: 'none',
        },
        subtitle: {
            marginBottom: 40,
            userSelect: 'none',
        },
        description: {
            maxWidth: 450,
            margin: 'auto',
        },
    }),
);

const logDescriptionLink = () => {
    ReactGA.event({
        category: 'Link',
        action: 'National Geographic',
        label: 'Landing',
    });
};

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
                <DropFade>
                    <Typography
                        variant='h1'
                        align='center'
                        className={classes.title}
                    >
                        {landingData.title}
                    </Typography>
                </DropFade>
                <DropFade>
                    <Typography
                        variant='h3'
                        align='center'
                        className={classes.subtitle}
                    >
                        {landingData.subtitle}
                    </Typography>
                </DropFade>
                <DropFade>
                    <Typography
                        variant='body1'
                        align='center'
                        className={classes.description}
                    >
                        According to
                        {' '}
                        <Link
                            onClick={logDescriptionLink}
                            color='secondary'
                            target='_blank'
                            href='https://www.nationalgeographic.com/news/2017/07/plastic-produced-recycling-waste-ocean-trash-debris-environment/'
                        >
                            National Geographic,
                        </Link>
                        {' '}
                        91% of plastics are not recycled.
                        Through household incentivization, GarboScore provides a solution.
                    </Typography>
                </DropFade>
            </Grid>
        </Grid>
    );
};
