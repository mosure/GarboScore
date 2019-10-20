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
            width: '100%',
            height: '100%',
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
                <image height={1} width={1} href={props.imgSrc}/>
                {
                    props.payload.map((obj, index) => {
                        const x = obj.imageObjectDetection[0].boundingBox.normalizedVertices[0].x;
                        const y = obj.imageObjectDetection[0].boundingBox.normalizedVertices[0].y;
                        const width = obj.imageObjectDetection[0].boundingBox.normalizedVertices[1].x;
                        const height = obj.imageObjectDetection[0].boundingBox.normalizedVertices[1].y;
                        return (
                            <rect
                                key={index}
                                fill='none'
                                stroke={obj.imageObjectDetection[0].color}
                                strokeWidth={0.001}
                                x={x}
                                y={y}
                                width={width - x}
                                height={height - y}
                            />
                        );
                    })
                }
            </svg>
            {
                !props.isLoaded && (
                    <LinearProgress
                        color='secondary'
                        className={classes.spinner}
                    />
                )
            }
        </Box>
    );
};
