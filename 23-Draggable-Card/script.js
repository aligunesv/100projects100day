let draggableCard = document.getElementById("draggable-card");
let initialX = 0,
    initialY = 0;
let moveElement = false;

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "mouseup",
    },
};

let deviceType= "";

const isTouching = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse"
        return false;
    }
}

isTouching();

draggableCard.addEventListener(events[deviceType].down, (e) =>{
    e.preventDefault();
    initialX = !isTouching() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouching() ? e.clientY : e.touches[0].clientY;

    moveElement = true;
});

draggableCard.addEventListener(events[deviceType].move, (e) => {
    if(moveElement){
        e.preventDefault();
        let newX = !isTouching() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouching() ? e.clientY : e.touches[0].clientY;
        draggableCard.style.top = draggableCard.offsetTop - (initialY - newY) + "px";
        draggableCard.style.left = draggableCard.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

draggableCard.addEventListener(events[deviceType].up, (stopMovement = (e) =>{
    moveElement = false;
}))

draggableCard.addEventListener("mouseleave", stopMovement);
draggableCard.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
})