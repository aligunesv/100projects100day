const wtchBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-icon");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("video");

wtchBtn.addEventListener("click", ()=>{
    videoContainer.classList.remove("active");
});

closeBtn.addEventListener("click", ()=>{
    videoContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
})
