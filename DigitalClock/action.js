const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("am-pm");

function updateClock(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = "AM";

    if(hours > 12){
        hours = hours - 12;
        ampm = "PM";
    }

    hours = hours < 10 ? "0" + hours: hours;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;

    hourElement.innerText = hours;
    minuteElement.innerText = minutes;
    secondsElement.innerText = seconds;
    ampmElement.innerText = ampm;

    setInterval(updateClock, 100);
}

updateClock();