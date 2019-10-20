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
            header: 'Incentives',
            description: `

            `,
            image: {
                imgSrc: incentive,
                imgAlt: 'Households save money via proper recycling',
            },
        },
    ],
};
