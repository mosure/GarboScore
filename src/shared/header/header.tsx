import React from 'react';
import {
    makeStyles,
    createStyles,
    Toolbar,
    AppBar,
    Slide,
    Hidden,
    useScrollTrigger,
} from '@material-ui/core';

import HeaderMobile from './header-mobile';
import HeaderWeb from './header-web';

const useStyles = makeStyles((theme) =>
    createStyles({
        pointer: {
            cursor: 'pointer',
            color: theme.palette.secondary.main,
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

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <HideOnScroll>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <div className={classes.pointer}>
                        Logo
                    </div>
                    <Hidden mdUp>
                        <HeaderMobile/>
                    </Hidden>
                    <Hidden smDown>
                        <HeaderWeb/>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;