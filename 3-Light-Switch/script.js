const body = document.querySelector('body');
const toggle = document.getElementById('switchLight');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-lightbulb-fill');
    if(this.classList.toggle('bi-lightbulb')){
        body.style.background = '#EEEEEE';
        body.style.color = '#151515';
        body.style.transition = '.8s';
    }else{
        body.style.background = '#151515';
        body.style.color = '#EEEEEE';
        body.style.transition = '.8s';
    }
});