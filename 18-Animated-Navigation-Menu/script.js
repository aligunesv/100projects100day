var menubtn = document.querySelector(".menuBtn");
var menu = document.querySelector(".menu");
var animfirst = document.querySelector(".headanimfirst");
var animsecond = document.querySelector(".headanimsecond");
var animthird = document.querySelector(".headanimthird");

menubtn.addEventListener("click", function(){
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        menubtn.classList.add("btnOff");
        animfirst.classList.remove("hiddenfirst");
        animsecond.classList.remove("hiddensecond");
        animthird.classList.remove("hiddenthird");
    }else{
        menu.classList.add("hidden");
        menubtn.classList.remove("btnOff");
        animfirst.classList.add("hiddenfirst");
        animsecond.classList.add("hiddensecond");
        animthird.classList.add("hiddenthird");
    }
});