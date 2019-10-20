import React from 'react';
import {
    Grid,
    Box,
    Typography,
    makeStyles,
    createStyles,
    Link,
} from '@material-ui/core';

import { dependencyData } from '../data';

const useStyles = makeStyles(
    (theme) => createStyles({
        header: {
            margin: 'auto',
            marginBottom: 40,
            userSelect: 'none',
        },
    }),
);

export const Dependencies: React.FC = () => {
    const classes = useStyles();
    return (
        <Box
            width='100%'
            bgcolor='primary.dark'
            pt={4}
            pb={4}
        >
            <Typography
                variant='h4'
                align='center'
                className={classes.header}
            >
                {dependencyData.header}
            </Typography>
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
                                <Link href={dependency.link} target='_blank'>
                                    <img
                                        src={dependency.imgSrc}
                                        alt={dependency.imgAlt}
                                    />
                                </Link>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};
