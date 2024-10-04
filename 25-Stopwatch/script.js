let timer = { ms: 0, sec: 0, min: 0, hr: 0 };
let timerDisplay = document.querySelector(".timer");
let interval = null;

const startTimer = () => {
    if (interval) clearInterval(interval);
    interval = setInterval(updateTime, 10);
};

const pauseTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timer = { ms: 0, sec: 0, min: 0, hr: 0 };
    timerDisplay.innerHTML = "00 : 00 : 00 : 000";
};

document.getElementById("start-tm").addEventListener("click", startTimer);
document.getElementById("pause-tm").addEventListener("click", pauseTimer);
document.getElementById("reset-tm").addEventListener("click", resetTimer);

function updateTime() {
    timer.ms += 10;
    if (timer.ms === 1000) {
        timer.ms = 0;
        timer.sec++;
        if (timer.sec === 60) {
            timer.sec = 0;
            timer.min++;
            if (timer.min === 60) {
                timer.min = 0;
                timer.hr++;
            }
        }
    }

    const format = (unit) => (unit < 10 ? "0" + unit : unit);
    const ms = timer.ms.toString().padStart(3, '0');
    
    timerDisplay.innerHTML = `${format(timer.hr)} : ${format(timer.min)} : ${format(timer.sec)} : ${ms}`;
}
