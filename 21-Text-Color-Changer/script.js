const chtext = document.querySelector(".chtext");

function changeTextColor() {
    var randomColor = getRandomColor();
    chtext.style.color = randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('textBtn').addEventListener('click', changeTextColor);
