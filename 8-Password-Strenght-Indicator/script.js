var password = document.getElementById("password")
var warn = document.getElementById("warn")
var strenght = document.getElementById("strenght")

password.addEventListener('input', () =>{
    if(password.value.length > 0){
        warn.style.display = "block";
    }
    else{
        warn.style.display = "none";
    }

    if(password.value.length < 4){
        strenght.innerHTML = "weak!";
        password.style.borderColor = "#FF0000"
        warn.style.color = "#FF0000"
    }
    else if(password.value.length >= 4 && password.value.length < 8){
        strenght.innerHTML = "medium!";
        password.style.borderColor = "#FFFF00"
        warn.style.color = "#FFFF00"
    }
    else if(password.value.length >= 8){
        strenght.innerHTML = "strong!";
        password.style.borderColor = "#00FF00"
        warn.style.color = "#00FF00"
    }
})