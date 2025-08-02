let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
  startStopBtn.textContent = "Stop";
  running = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startStopBtn.textContent = "Start";
  running = false;
}

startStopBtn.addEventListener('click', () => {
  running ? stopTimer() : startTimer();
});

resetBtn.addEventListener('click', () => {
  stopTimer();
  elapsedTime = 0;
  display.textContent = "00:00:00";
});
