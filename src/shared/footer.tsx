import React from 'react';
import { Grid, makeStyles, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        footer: {
            height: '128px',
            backgroundColor: theme.palette.primary.dark,
        },
        consoleFont: {
            fontFamily: '"SF Mono", "Roboto Mono", "Lucida Console", Monaco, monospace, sans-serif',
            fontSize: '0.86rem',
        },
        iconContainer: {
            paddingBottom: '8px',
        },
        primaryText: {
            fill: theme.palette.text.hint,
            '&:hover': {
                fill: theme.palette.secondary.main,
            },
        },
        iconButtonNoHover: {
            '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.secondary.main,
            },
        },
    }),
);

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            alignContent='center'
            direction='column'
            className={classes.footer}
        >
            <Grid item>
                <Typography className={classes.consoleFont} variant='body2'>
                    Built by Brady Lenz and Mitchell Mosure
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;