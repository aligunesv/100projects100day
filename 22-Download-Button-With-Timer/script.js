const downloadButton = document.querySelector(".download-btn");

const fileLink = "https://images.pexels.com/photos/17503521/pexels-photo-17503521.jpeg?cs=srgb&dl=pexels-nati-17503521.jpg&fm=jpg&_gl=1*1cdso4d*_ga*MTQ0ODY5MjkxNS4xNjkwNDU0ODYx*_ga_8JE65Q40S6*MTY5MDQ1NDg2MS4xLjEuMTY5MDQ1NDkxMC4wLjAuMA..";

const initTimer = () => {
    if(downloadButton.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadButton.dataset.timer;
    downloadButton.classList.add("timer");
    downloadButton.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadButton.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadButton.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadButton.classList.replace("timer", "disable-timer");
            downloadButton.innerHTML = `<i class="fa fa-download"></i>
                                     <span class="text">Download Again</span>`;
        }, 3000);
    }, 1000);
}

downloadButton.addEventListener("click", initTimer);