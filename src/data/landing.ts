import firebase from '../assets/landing/firebase.svg';
import googlecloud from '../assets/landing/googlecloud.svg';
import mongodb from '../assets/landing/mongodb.svg';

interface Landing {
    title: string;
    subtitle: string;
    description: string;
    dependenciesHeader: string;
    dependencies: Depedency[];
}

interface Depedency {
    imgSrc: string;
    imgAlt: string;
}

export const landingData: Landing = {
    title: 'GarboScore',
    subtitle: 'Sustainable Garbage Analyzer',
    description: `
        GarboScore scores 
    `,
    dependenciesHeader: 'Powered By',
    dependencies: [
        {
            imgSrc: googlecloud,
            imgAlt: 'Google Cloud',
        },
        {
            imgSrc: mongodb,
            imgAlt: 'MongoDB',
        },
        {
            imgSrc: firebase,
            imgAlt: 'FireBase',
        },
    ],
};
