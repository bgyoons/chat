let time = document.getElementById("time");
let stopwatch;
let sec = 0;
let min = 0;
let hour = 0;

function timer() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hour++;
        }
    }
}

function startTimer() {
    stopwatch = setTimeout(start, 1000);
}

function start() {
    timer();
    startTimer();
    time.innerHTML = (hour <= 10 ? "0" + hour : hour) + ":" + (min <= 10 ? "0" + min : min) + ":" + (sec <= 10 ? "0" + sec : sec);
}

function stop() {
    clearTimeout(stopwatch);
}

function reset() {
    stop();
    time.innerHTML = "00:00:00";
    sec = 0; 
    min = 0;
    hour = 0;
}