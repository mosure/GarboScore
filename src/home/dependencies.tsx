import React from 'react';
import ReactGA from 'react-ga';
import {
    Grid,
    Box,
    Typography,
    makeStyles,
    createStyles,
    Link,
} from '@material-ui/core';
import posed from 'react-pose';

import { dependencyData } from '../data';
import { DropFade } from './';

const useStyles = makeStyles(
    (theme) => createStyles({
        header: {
            margin: 'auto',
            marginBottom: 40,
            userSelect: 'none',
            color: theme.palette.text.hint,
        },
    }),
);

const logDependencyClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'Image',
            action: `Nav: ${name}`,
            label: 'Dependencies',
        });
    };
};

const PoseImg = posed.img({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
});

export const Dependencies: React.FC = () => {
    const classes = useStyles();
    return (
        <Box
            width='100%'
            bgcolor='primary.dark'
            pt={4}
            pb={4}
        >
            <DropFade>
                <Typography
                    variant='h4'
                    align='center'
                    className={classes.header}
                >
                    {dependencyData.header}
                </Typography>
            </DropFade>
            <Grid
                container
                justify='center'
                alignItems='center'
                spacing={4}
            >
                {
                    dependencyData.dependencies.map((dependency, index) => {
                        return (
                            <Grid
                                item
                                key={index}
                            >
                                <DropFade>
                                    <Link
                                        href={dependency.link}
                                        target='_blank'
                                        onClick={logDependencyClick(dependency.imgAlt)}
                                    >
                                        <PoseImg
                                            src={dependency.imgSrc}
                                            alt={dependency.imgAlt}
                                        />
                                    </Link>
                                </DropFade>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};
