let btn = document.querySelector('button');
let output = document.querySelector('#output');

function getRandomNumber(min,max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

btn.addEventListener('click', () =>{
    output.innerHTML = getRandomNumber(1,100);
})