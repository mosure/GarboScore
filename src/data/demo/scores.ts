import * as example1 from '../../assets/demo/example1.jpg';
import * as example2 from '../../assets/demo/example2.jpg';
import * as example3 from '../../assets/demo/example3.jpg';

export interface Evaluation {
    imgSrc: string;
    imgAlt: string;
    payload: ClassificationObject[];
    isLoaded: boolean;
    score: number;
}

interface ClassificationObject {
    displayName: string;
    imageObjectDetection: ImageObjectDetection;
}

interface ImageObjectDetection {
    boundingBox: BoundingBox;
    score: number;
    color?: string;
}

interface BoundingBox {
    normalizedVertices: NormalizedVertices[];
}

interface NormalizedVertices {
    x: number;
    y: number;
}

export const evaluationData: Evaluation[] = [
    {
        imgSrc: example1.default,
        imgAlt: 'Example 1',
        isLoaded: true,
        score: 4,
        payload: [
            {
                displayName: 'glass',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.06722600013017654,
                                y: 0.032620400190353394,
                            },
                            {
                                x: 0.38055700063705444,
                                y: 0.5402039885520935,
                            },
                        ],
                    },
                    score: 0.9684039950370789,
                },
            },
            {
                displayName: 'plastic',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.09706679731607437,
                                y: 0.5765519738197327,
                            },
                            {
                                x: 0.4439049959182739,
                                y: 0.9399960041046143,
                            },
                        ],
                    },
                    score: 0.9622189998626709,
                },
            },
            {
                displayName: 'metal',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.5343419909477234,
                                y: 0.49305999279022217,
                            },
                            {
                                x: 0.9125480055809021,
                                y: 0.9828130006790161,
                            },
                        ],
                    },
                    score: 0.7150440216064453,
                },
            },
            {
                displayName: 'metal',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.6127989888191223,
                                y: 0.04846449941396713,
                            },
                            {
                                x: 0.9485570192337036,
                                y: 0.5083829760551453,
                            },
                        ],
                    },
                    score: 0.5971580147743225,
                },
            },
        ],
    },
    {
        imgSrc: example2.default,
        imgAlt: 'Example 2',
        isLoaded: true,
        score: 2,
        payload: [
            {
                displayName: 'plastic',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.44532498717308044,
                                y: 0.11859200149774551,
                            },
                            {
                                x: 0.9058660268783569,
                                y: 0.6814090013504028,
                            },
                        ],
                    },
                    score: 0.9509289860725403,
                },
            },
            {
                displayName: 'plastic',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.4616439938545227,
                                y: 0.7294089794158936,
                            },
                            {
                                x: 0.9503229856491089,
                                y: 0.9441850185394287,
                            },
                        ],
                    },
                    score: 0.7237169742584229,
                },
            },
        ],
    },
    {
        imgSrc: example3.default,
        imgAlt: 'Example 3',
        isLoaded: true,
        score: 3,
        payload: [
            {
                displayName: 'glass',
                imageObjectDetection: {
                    boundingBox: {
                        'normalizedVertices': [
                            {
                                'x': 0,
                                'y': 0.45827698707580566,
                            },
                            {
                                'x': 0.6068689823150635,
                                'y': 0.6623250246047974,
                            },
                        ],
                    },
                    score: 0.9809899926185608,
                },
            },
            {
                displayName: 'plastic',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.6239510178565979,
                                y: 0.45372501015663147,
                            },
                            {
                                x: 0.9885119795799255,
                                y: 0.8156179785728455,
                            },
                        ],
                    },
                    'score': 0.9476940035820007,
                },
            },
            {
                displayName: 'plastic',
                imageObjectDetection: {
                    boundingBox: {
                        normalizedVertices: [
                            {
                                x: 0.0421237014234066,
                                y: 0.754764974117279,
                            },
                            {
                                x: 0.5035750269889832,
                                y: 0.9324280023574829,
                            },
                        ],
                    },
                    score: 0.6781290173530579,
                },
            },
        ],
    },
];
