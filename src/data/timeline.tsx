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
            header: 'Take out the Trash',
            description: `
                Our process starts when you, the homeowner, takes your trash to the curb.
                Does your trash can only contain landfill suitable items? GarboScore analyzes
                the material contents of your garbage upon collection and keeps you up to date
                on your recycling habits. All of this is not without reward, continue reading
                to understand how GarboScore could also incentivize recycling.
            `,
            image: {
                imgSrc: trash,
                imgAlt: 'Taking out the trash',
            },
        },
        {
            header: 'Garbage Trucks and Baggage',
            description: `
                Our process depends on X-ray image analysis to pick out recyclable items
                from normal trash. We detail a multi-axis X-ray scanner inside of the
                pre-compressed holding area of garbage trucks. This system could be retrofit or
                built on new models. The X-rays would be safe, contained, and would provide outlines
                and material analysis of the garbage. Analyzing the X-ray images with advanced machine
                learning models would provide a detailed account of recyclable items. A system such as this
                is proved to be feasible by current TSA baggage X-ray implementations, using machine learning
                models in a similar fashion.
            `,
            image: {
                imgSrc: garbagetruck,
                imgAlt: 'Garbage truck collects the garbage',
            },
        },
        {
            header: 'Machine Learning Analysis',
            description: `
                Our machine learning pipeline utilizes Google Cloud Platform's AutoML Vision Object Detection
                to locate and classify recyclable items in images. Our current system details a proof of concept to show
                that shape detection of recyclable items is possible. A more advanced system would take into consideration
                multi-spectrum images from different axes.
            `,
            image: {
                imgSrc: processing,
                imgAlt: 'Machine learning processes the data',
            },
        },
        {
            header: 'Scoring Your Garbage',
            description: `
                After processing the contents of a garbage container, our system documents the location of the household,
                along with an immediate score for that container. The score is
                determined by the number of items that should have been recycled. Communities can
                customize the types of items accepted by the system to accomodate for different types
                of recycling facilites.
            `,
            image: {
                imgSrc: location,
                imgAlt: 'A score is assigned to every household',
            },
        },
        {
            header: 'Reporting',
            description: `
                Our platform allows for external querying of households, via web API. These queries perform aggregations
                of scores to provide accurate scores over time. These reports can be used by communities to further policies
                and show recycling progress. The scores will also be available via our mobile app, where you can view your
                garbage report in realtime.
            `,
            image: {
                imgSrc: report,
                imgAlt: 'Reports are generated for each household',
            },
        },
        {
            header: 'What are the Incentives?',
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
