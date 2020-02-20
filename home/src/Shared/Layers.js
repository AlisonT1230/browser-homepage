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
    },
    "two": {
        "5": {
            "isTransitionHour": null,
            "transition": "#32374fff"
        },
        "11": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 5,
                "endTime": 11,
                "startColour": {
                    "r": 50,
                    "g": 55,
                    "b": 79
                },
                "endColour": {
                    "r": 150,
                    "g": 141,
                    "b": 240
                }
            }
        },
        "15": {
            "isTransitionHour": null,
            "transition": "#968df0ff"
        },
        "17": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 15,
                "endTime": 17,
                "startColour": {
                    "r": 150,
                    "g": 141,
                    "b": 240
                },
                "endColour": {
                    "r": 255,
                    "g": 136,
                    "b": 70
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
                    "g": 136,
                    "b": 70
                },
                "endColour": {
                    "r": 50,
                    "g": 55,
                    "b": 79
                }
            }
        },
        "24": {
            "isTransitionHour": null,
            "transition": "#32374fff"
        }
    },
    "three": {
        "5": {
            "isTransitionHour": null,
            "transition": "#4f3542ff"
        },
        "11": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 5,
                "endTime": 11,
                "startColour": {
                    "r": 79,
                    "g": 53,
                    "b": 66
                },
                "endColour": {
                    "r": 134,
                    "g": 138,
                    "b": 180
                }
            }
        },
        "15": {
            "isTransitionHour": null,
            "transition": "#868ab4ff"
        },
        "17": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 15,
                "endTime": 17,
                "startColour": {
                    "r": 134,
                    "g": 138,
                    "b": 180
                },
                "endColour": {
                    "r": 226,
                    "g": 97,
                    "b": 60
                }
            }
        },
        "20": {
            "isTransitionHour": true,
            "transition": {
                "startTime": 17,
                "endTime": 20,
                "startColour": {
                    "r": 226,
                    "g": 97,
                    "b": 60
                },
                "endColour": {
                    "r": 79,
                    "g": 53,
                    "b": 66
                }
            }
        },
        "24": {
            "isTransitionHour": null,
            "transition": "#4f3542ff"
        }
    }
};

export const layerPaths = {
    "one": {
        "path": "M 459.38086,365.68638 308.75585,593.16099 199.6582,431.53794 9.750005,524.47154 5e-6,527.6688 5e-6,1052.3622 1600,1052.3622 l 0,-460.67973 -109.1895,-74.56836 -140,68.57227 -82.8574,-205.71484 -240,165.71484 L 890.81055,448.54185 842.23828,491.39927 750.81055,428.54185 585.0957,582.82896 459.38086,365.68638 Z",
        "viewBox": "0 305 1600 686.676"
    },
    "two": {
        "path": "M 869.67149,97.475035 740.37269,234.8559 683.80429,198.49067 635.31609,291.42426 477.73207,174.24653 336.31214,279.30317 255.49964,234.8559 162.5641,275.26215 53.468385,194.44965 -51.588255,230.81489 -197.04918,113.63715 l -254.20703,101.6836 0,476.71484 1600.00001,0 0,-503.19336 -56.8379,46.01367 -92.93561,-96.97461 -44.4453,20.20313 -84.8535,-60.609385 z",
        "viewBox": "-451 -10 1600 594.561"
    },
    "three": {
        "path": "m 1023.1352,237.36083 -92.93557,4.04101 -202.0292,129.29883 -60.6094,24.24414 -185.86916,-60.60937 -218.19141,68.68945 -60.60938,28.28516 -262.640616,-129.30078 -193.949224,80.8125 -250.16601,-66.94532 0,358.46094 1599.99997,0 0,-397.1582 -73,-39.81836 z",
        "viewBox": "-505 50 1600 436.977"
    }
}