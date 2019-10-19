interface Header {
    icon: string;
    button: Button;
}

interface Button {
    text: string;
    link: string;
}

export const headerData = {
    icon: 'Icon',
    button: {
        text: 'Demo',
        link: 'demo',
    }
};
