let timerInterval;
let stopwatchInterval;
let timerRunning = false;
let stopwatchRunning = false;

const timer = document.getElementById('timer');
const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');

const stopwatch = document.getElementById('stopwatch');
const startStopwatchBtn = document.getElementById('startStopwatch');
const stopStopwatchBtn = document.getElementById('stopStopwatch');
const resetStopwatchBtn = document.getElementById('resetStopwatch');

startTimerBtn.addEventListener('click', startTimer);
stopTimerBtn.addEventListener('click', stopTimer);
startStopwatchBtn.addEventListener('click', startStopwatch);
stopStopwatchBtn.addEventListener('click', stopStopwatch);
resetStopwatchBtn.addEventListener('click', resetStopwatch);

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        const startTime = Date.now();
        timerInterval = setInterval(function() {
            const elapsedTime = Date.now() - startTime;
            timer.textContent = formatTime(elapsedTime);
        }, 1000);
    }
}

function stopTimer() {
    if (timerRunning) {
        timerRunning = false;
        clearInterval(timerInterval);
    }
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        const startTime = Date.now();
        stopwatchInterval = setInterval(function() {
            const elapsedTime = Date.now() - startTime;
            stopwatch.textContent = formatTime(elapsedTime);
        }, 10);
    }
}

function stopStopwatch() {
    if (stopwatchRunning) {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
    }
}

function resetStopwatch() {
    stopwatch.textContent = '00:00:00';
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
