const STORAGE_KEY = "pomodoroMinutes";
const DEFAULT_MINUTES = 25;

function getTimerSeconds() {
  const savedMinutes = Number(localStorage.getItem(STORAGE_KEY));
  const minutes = savedMinutes > 0 ? savedMinutes : DEFAULT_MINUTES;
  return minutes * 60;
}

let remainingSeconds = getTimerSeconds();
let timerId = null;

const timeDisplay = document.getElementById("time-display");

function render() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  timeDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    if (remainingSeconds <= 0) {
      stopTimer();
      return;
    }
    remainingSeconds -= 1;
    render();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = getTimerSeconds();
  render();
}

render();
