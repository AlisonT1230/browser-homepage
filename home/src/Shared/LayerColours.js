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
    }
};