import React from 'react';
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

const useStyles = makeStyles((theme) =>
    createStyles({
        grid: {
            width: '100%',
        },
        pointer: {
            cursor: 'pointer',
            color: theme.palette.secondary.main,
            maxWidth: 48,
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
                            <Link to={headerData.icon.link}>
                                <img
                                    src={headerData.icon.imgSrc}
                                    alt={headerData.icon.imgAlt}
                                    className={classes.pointer}
                                />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button
                                component={Link}
                                to={headerData.button.link}
                                variant='outlined'
                                color='secondary'
                                size='large'
                            >
                                {headerData.button.text}
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};
