var togglebutton = document.querySelector('.navbar-togglebutton');
var menu = document.querySelector('.navbar-menu');
var icons = document.querySelector('.navbar-icons');

togglebutton.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});