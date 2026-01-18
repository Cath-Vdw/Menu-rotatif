const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector('.container') //c'est une classe, donc ne pas oublier le point

open.addEventListener('click',() => container.classList.add ('show-nav'))
close.addEventListener('click',() => container.classList.remove ('show-nav'))
