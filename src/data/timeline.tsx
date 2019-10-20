import React from 'react';

import garbagetruck from '../assets/timeline/garbage-truck.svg';
import incentive from '../assets/timeline/incentive.svg';
import location from '../assets/timeline/location.svg';
import processing from '../assets/timeline/processing.svg';
import report from '../assets/timeline/report.svg';
import trash from '../assets/timeline/trash.svg';

interface Timeline {
    header: string;
    snapshots: Snapshot[];
}

interface Snapshot {
    header: string;
    description?: string;
    element?: () => React.ReactElement;
    image: Image;
}

interface Image {
    imgSrc: string;
    imgAlt: string;
}

export const timelineData: Timeline = {
    header: 'How It Works',
    snapshots: [
        {
            header: 'Trash',
            description: '',
            image: {
                imgSrc: trash,
                imgAlt: 'Taking out the trash',
            },
        },
        {
            header: 'Garbage Truck/X-Ray',
            description: '',
            image: {
                imgSrc: garbagetruck,
                imgAlt: 'Garbage truck collects the garbage',
            },
        },
        {
            header: 'ML/object dection',
            description: '',
            image: {
                imgSrc: processing,
                imgAlt: 'Machine learning processes the data',
            },
        },
        {
            header: 'Garbage scoring/location',
            description: '',
            image: {
                imgSrc: location,
                imgAlt: 'A score is assigned to every household',
            },
        },
        {
            header: 'Reporting',
            description: '',
            image: {
                imgSrc: report,
                imgAlt: 'Reports are generated for each household',
            },
        },
        {
            header: 'What are the incentives?',
            description: `
                If a community decides to implement GarboScore, providing some form of incentivization
                would encourage the positive change of proper recycling. This incentivization could be either
                positive or negative, for example, tax breaks could be given to households with better scores
                or fines could be given out to households with bad scores. GarboScore recommends the positive
                incentive, as communities would be more receptive to the idea and errors do not result in
                unsolicited fines.
            `,
            image: {
                imgSrc: incentive,
                imgAlt: 'Households save money via proper recycling',
            },
        },
    ],
};
