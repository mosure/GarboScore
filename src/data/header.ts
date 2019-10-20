import * as logo from '../assets/logo.png';

interface Header {
    button: Button;
    icon: Icon;
}

interface Icon {
    imgSrc: string;
    imgAlt: string;
    link: string;
}

interface Button {
    text: string;
    link: string;
}

export const headerData: Header = {
    button: {
        text: 'Demo',
        link: 'demo',
    },
    icon: {
        imgSrc: logo.default,
        imgAlt: 'Logo',
        link: '/',
    },
};
