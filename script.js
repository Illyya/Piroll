let menu = document.querySelector('.page-header__menu');
let burger = document.querySelector('.page-header__burger');

burger.onclick = function () {
    menu.classList.toggle('active');
}