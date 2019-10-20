import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { Evaluation } from './';
import { evaluationData } from '../data';

export const Presets = () => {
    return (
        <Evaluation {...evaluationData[0]}/>
    );
};
