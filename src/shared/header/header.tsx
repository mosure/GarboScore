import React from 'react';
import ReactGA from 'react-ga';
import {
    makeStyles,
    createStyles,
    Toolbar,
    AppBar,
    Slide,
    useScrollTrigger,
    Button,
    Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { headerData } from '../../data';
import { DropFade } from '../../home';

const useStyles = makeStyles((theme) =>
    createStyles({
        grid: {
            width: '100%',
            paddingRight: 20,
        },
        pointer: {
            cursor: 'pointer',
            color: theme.palette.secondary.main,
            maxWidth: 48,
            [theme.breakpoints.down('sm')]: {
                maxWidth: 36,
            },
        },
        appBar: {
            zIndex: theme.zIndex.modal + 1,
        },
    }),
);

const HideOnScroll: React.FC = (props) => {
    const trigger = useScrollTrigger();
    const elevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement((
        <Slide appear={false} direction='down' in={!trigger}>
            {props.children}
        </Slide>
    ), {
        elevation: elevationTrigger ? 8 : 0,
    });
};

const logImageClick = () => {
    ReactGA.event({
        category: 'Image',
        action: 'Nav: home',
        label: 'Header',
    });
};

const logButtonClick = () => {
    ReactGA.event({
        category: 'Button',
        action: 'Nav: Demo',
        label: 'Header',
    });
};

export const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <HideOnScroll>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Grid
                        container
                        justify='space-between'
                        alignItems='center'
                        className={classes.grid}
                    >
                        <Grid item>
                            <DropFade>
                                <Link
                                    to={headerData.icon.link}
                                    onClick={logImageClick}
                                >
                                    <img
                                        src={headerData.icon.imgSrc}
                                        alt={headerData.icon.imgAlt}
                                        className={classes.pointer}
                                    />
                                </Link>
                            </DropFade>
                        </Grid>
                        <Grid item>
                            <DropFade>
                                <Button
                                    component={Link}
                                    to={headerData.button.link}
                                    variant='outlined'
                                    color='secondary'
                                    size='large'
                                    onClick={logButtonClick}
                                >
                                    {headerData.button.text}
                                </Button>
                            </DropFade>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};
