const celcius = document.querySelector("#cel")
const fahrenheit = document.querySelector("#fah");

window.addEventListener("load", () => celcius.focus());

celcius.addEventListener("input", () =>{
    fahrenheit.value = ((celcius.value * 9) / 5 + 32).toFixed(2);
    if(!celcius.value) fahrenheit.value = "";
});

fahrenheit.addEventListener("input", () => {
    celcius.value = (((fahrenheit.value -32) * 5) / 9).toFixed(2);;
    if(!fahrenheit.value) celcius.value = "";
})