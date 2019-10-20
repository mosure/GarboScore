import firebase from '../../assets/landing/firebase.svg';
import googlecloud from '../../assets/landing/googlecloud.svg';
import mongodb from '../../assets/landing/mongodb.svg';

interface Dependencies {
    header: string;
    dependencies: Dependency[];
}

interface Dependency {
    imgSrc: string;
    imgAlt: string;
    link: string;
}

export const dependencyData: Dependencies = {
    header: 'Powered By',
    dependencies: [
        {
            imgSrc: googlecloud,
            imgAlt: 'Google Cloud',
            link: 'https://cloud.google.com/',
        },
        {
            imgSrc: mongodb,
            imgAlt: 'MongoDB',
            link: 'https://www.mongodb.com/',
        },
        {
            imgSrc: firebase,
            imgAlt: 'FireBase',
            link: 'https://firebase.google.com/',
        },
    ],
};
