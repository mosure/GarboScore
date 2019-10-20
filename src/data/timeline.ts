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
    description: string;
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
                imgAlt: '',
            },
        },
        {
            header: 'Garbage Truck/X-Ray',
            description: '',
            image: {
                imgSrc: garbagetruck,
                imgAlt: '',
            },
        },
        {
            header: 'ML/object dection',
            description: '',
            image: {
                imgSrc: processing,
                imgAlt: '',
            },
        },
        {
            header: 'Garbage scoring/location',
            description: '',
            image: {
                imgSrc: location,
                imgAlt: '',
            },
        },
        {
            header: 'Reporting',
            description: '',
            image: {
                imgSrc: report,
                imgAlt: '',
            },
        },
        {
            header: 'Incentives',
            description: '',
            image: {
                imgSrc: incentive,
                imgAlt: '',
            },
        },
    ],
};
