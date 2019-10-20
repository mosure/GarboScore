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
        progressBar: {
            position: 'absolute',
            left: '50%',
            top: '100%',
            transform: 'translateX(-50%)',
            width: '100%',
        },
    }),
);

interface ColorMapping {
    [key: string]: string;
}

const colorMapping: ColorMapping = {
    'metal': 'red',
    'plastic': 'green',
    'glass': 'blue',
};

export const Evaluation: React.FC<IEvaluation> = (props: IEvaluation) => {
    const classes = useStyles(props);

    return (
        <Box className={classes.container}>
            {
                (props.payload && props.payload[0].imageObjectDetection) && (
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
                                const x = obj.imageObjectDetection.boundingBox.normalizedVertices[0].x;
                                const y = obj.imageObjectDetection.boundingBox.normalizedVertices[0].y;
                                const width = obj.imageObjectDetection.boundingBox.normalizedVertices[1].x;
                                const height = obj.imageObjectDetection.boundingBox.normalizedVertices[1].y;
                                return (
                                    <rect
                                        fill='black'
                                        key={index}
                                        fillOpacity={0.01}
                                        stroke={colorMapping[obj.displayName.toLowerCase()] || 'blue'}
                                        strokeWidth={0.005}
                                        x={x}
                                        y={y}
                                        width={width - x}
                                        height={height - y}
                                    >
                                        <title>{`${obj.displayName}: ${Math.round(obj.imageObjectDetection.score * 100) / 100}`}</title>
                                    </rect>
                                );
                            })
                        }
                    </svg>
                )
            }
            {
                !props.isLoaded && props.imgSrc && (
                    <LinearProgress
                        color='secondary'
                        className={classes.progressBar}
                    />
                )
            }
        </Box>
    );
};
