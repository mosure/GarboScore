import React from 'react';
import {
    Box,
    makeStyles,
    createStyles,
    LinearProgress,
} from '@material-ui/core';

import { Evaluation as IEvaluation} from '../data';

const useStyles = makeStyles(
    (theme) => createStyles({
        container: {
            position: 'relative',
            width: 200,
            height: 400,
        },
        spinner: {
            position: 'absolute',
            left: '50%',
            top: '100%',
            transform: 'translateX(-50%)',
            width: '100%',
        },
    }),
);

export const Evaluation: React.FC<IEvaluation> = (props: IEvaluation) => {
    const classes = useStyles(props);
    return (
        <Box className={classes.container}>
            <svg
                height='100%'
                width='100%'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 1 1'
            >
                
            </svg>
            {
                props.isLoaded && (
                    <LinearProgress
                        color='secondary'
                        className={classes.spinner}
                    />
                )
            }
        </Box>
    );
};
