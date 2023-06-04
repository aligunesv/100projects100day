var countdownElement = document.getElementById("countdown");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");

var timer;
var totalSeconds = 0;

function formatTime(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  return hours + ":" + minutes + ":" + seconds;
}

function updateCountdown() {
  countdownElement.textContent = formatTime(totalSeconds);
  totalSeconds--;

  if (totalSeconds < 0) {
    clearInterval(timer);
    countdownElement.textContent = "Time's up!";
  }
}

function startCountdown() {
  clearInterval(timer);
  totalSeconds = 247; //you can set time on here
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
}


function resetCountdown() {
  clearInterval(timer);
  countdownElement.textContent = "00:00:00";
  totalSeconds = 0;
}


startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);
