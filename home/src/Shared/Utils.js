export function getTransitionColour(time, startHour, endHour, startColour, endColour) {
    var currentSeconds = time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds()
    var percentage = 1-(60*60*endHour - currentSeconds)/(60*60*endHour - 60*60*startHour);

    var r = startColour.r - (startColour.r-endColour.r) * percentage
    var g = startColour.g - (startColour.g-endColour.g) * percentage
    var b = startColour.b - (startColour.b-endColour.b) * percentage

    return "rgb(" + r + "," + g + "," + b + ")";
}