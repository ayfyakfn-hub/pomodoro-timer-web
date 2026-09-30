const MIN_MINUTES = 1;
const MAX_MINUTES = 60;
const STORAGE_KEY = "pomodoroMinutes";

const minutesInput = document.getElementById("timer-minutes");
const saveButton = document.getElementById("save-button");

function isValid() {
  if (minutesInput.value === "") return false;

  const minutes = Number(minutesInput.value);
  return minutes >= MIN_MINUTES && minutes <= MAX_MINUTES;
}

function validateInput() {
  saveButton.disabled = !isValid();
}

function saveSetting() {
  if (!isValid()) return;

  localStorage.setItem(STORAGE_KEY, minutesInput.value);
}

(function init() {
  const savedMinutes = localStorage.getItem(STORAGE_KEY);
  if (savedMinutes !== null) {
    minutesInput.value = savedMinutes;
  }
  validateInput();
})();
