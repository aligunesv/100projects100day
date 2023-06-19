const closeMenuButton = document.querySelector('.close-menu-btn');
const openMenuButton = document.querySelector('.open-menu-btn');
const expandingMenu = document.querySelector('.expanding-menu');

closeMenuButton.addEventListener('click', function() {
  expandingMenu.classList.add('hidden');
});


openMenuButton.addEventListener('click', function(){
    expandingMenu.classList.remove('hidden');
});
