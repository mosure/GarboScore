import firebase from '../assets/landing/firebase.svg';
import googlecloud from '../assets/landing/googlecloud.svg';
import mongodb from '../assets/landing/mongodb.svg';

interface Dependencies {
    header: string;
    dependencies: Dependency[];
}

interface Dependency {
    imgSrc: string;
    imgAlt: string;
}

export const dependencyData: Dependencies = {
    header: 'Powered By',
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
