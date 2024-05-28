const timer = document.querySelector('.timer')
const time = 60 * 30;

let timerTime = time;

function formatingTime(props) {
    let hours = String(props.hours).length === 1 ? ('0' + props.hours) : String(props.hours)
    let minutes = String(props.minutes).length === 1 ? ('0' + props.minutes) : String(props.minutes)
    let seconds = String(props.seconds).length === 1 ? ('0' + props.seconds) : String(props.seconds)

    if (seconds.length > 2) seconds = seconds.slice(-2)

    return `${hours}:${minutes}:${seconds}`
}

function getHours(timerTime) {
    return Math.floor(timerTime / 60 ** 2);
}

function getMinutes(timerTime) {
    return Math.floor(timerTime / 60) % 60;
}

function getSeconds(timerTime, minutes) {
    return Math.floor(timerTime - minutes * 60);
}

export function launchTimer() {
    return (setInterval(() => {
        timerTime -= 1;

        let hours = getHours(timerTime)
        let minutes = getMinutes(timerTime)
        let seconds = getSeconds(timerTime, minutes)

        timer.innerHTML = formatingTime({ hours, minutes, seconds, timerTime })

        if (timerTime === 0) timerTime = time
    }, 1000))
}
