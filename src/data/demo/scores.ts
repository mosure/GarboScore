import * as example1 from '../../assets/demo/example1.jpg';
import * as example2 from '../../assets/demo/example2.jpg';

export interface Evaluation {
    imgSrc: string;
    imgAlt: string;
    payload: ClassificationObject[];
    isLoaded: boolean;
    score: number;
}

interface ClassificationObject {
    displayName: string;
    imageObjectDetection: ImageObjectDetection[];
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
                imageObjectDetection: [
                    {
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
                ],
            },
            {
                displayName: 'plastic',
                imageObjectDetection: [
                    {
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
                ],
            },
            {
                displayName: 'metal',
                imageObjectDetection: [
                    {
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
                ],
            },
            {
                displayName: 'metal',
                imageObjectDetection: [
                    {
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
                ],
            },
        ],
    },
    {
        imgSrc: example2.default,
        imgAlt: 'Example 2',
        isLoaded: true,
        score: 4,
        payload: [
            {
                displayName: 'glass',
                imageObjectDetection: [
                    {
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
                ],
            },
            {
                displayName: 'plastic',
                imageObjectDetection: [
                    {
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
                ],
            },
            {
                displayName: 'metal',
                imageObjectDetection: [
                    {
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
                ],
            },
            {
                displayName: 'metal',
                imageObjectDetection: [
                    {
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
                ],
            },
        ],
    },
];
