const daysElement = document.getElementById("days");
const hrsElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secssElement = document.getElementById("seconds");

const lastDate = "30 January 2023";

function countdown() {
    const NewlastDate = new Date(lastDate);
    const currentDate = new Date();

    const totalSeconds = (NewlastDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hrsElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secssElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);