export const layers = {
    BACKGROUND: "background",
    ONE: "one",
    TWO: "two",
    THREE: "three",
    FOUR: "four",
    FIVE: "five"
}

export const layerColours = {
    "background": {
        "5": {
            "isTransitionHour": null,
            "transition": "#281f34ff"
        },
        "11": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 5,
                "endTime": 11,
                "startColour": {
                    "r": 40,
                    "g": 31,
                    "b": 52
                },
                "endColour": {
                    "r": 198,
                    "g": 222,
                    "b": 255
                }
            }
        },
        "15": {
            "isTransitionHour": null,
            "transition": "#c6deffff"
        },
        "17": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 15,
                "endTime": 17,
                "startColour": {
                    "r": 198,
                    "g": 222,
                    "b": 255
                },
                "endColour": {
                    "r": 255,
                    "g": 196,
                    "b": 139
                }
            }
        },
        "20": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 17,
                "endTime": 20,
                "startColour": {
                    "r": 255,
                    "g": 196,
                    "b": 139
                },
                "endColour": {
                    "r": 40,
                    "g": 31,
                    "b": 52
                }
            }
        },
        "24": {
            "isTransitionHour": null,
            "transition": "#281f34ff"
        }
    },
    "one": {
        "5": {
            "isTransitionHour": null,
            "transition": "#2c253dff"
        },
        "11": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 5,
                "endTime": 11,
                "startColour": {
                    "r": 44,
                    "g": 37,
                    "b": 61
                },
                "endColour": {
                    "r": 159,
                    "g": 174,
                    "b": 255
                }
            }
        },
        "15": {
            "isTransitionHour": null,
            "transition": "#9faeffff"
        },
        "17": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 15,
                "endTime": 17,
                "startColour": {
                    "r": 159,
                    "g": 174,
                    "b": 255
                },
                "endColour": {
                    "r": 255,
                    "g": 166,
                    "b": 74
                }
            }
        },
        "20": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 17,
                "endTime": 20,
                "startColour": {
                    "r": 255,
                    "g": 166,
                    "b": 74
                },
                "endColour": {
                    "r": 44,
                    "g": 37,
                    "b": 61
                }
            }
        },
        "24": {
            "isTransitionHour": null,
            "transition": "#2c253dff"
        }
    }
};

export const layerPaths = {
    "one": {
        "path": "M 459.38086,365.68638 308.75585,593.16099 199.6582,431.53794 9.750005,524.47154 5e-6,527.6688 5e-6,1052.3622 1600,1052.3622 l 0,-460.67973 -109.1895,-74.56836 -140,68.57227 -82.8574,-205.71484 -240,165.71484 L 890.81055,448.54185 842.23828,491.39927 750.81055,428.54185 585.0957,582.82896 459.38086,365.68638 Z",
        "viewBox": "0 305 1600 686.676"
    }
}