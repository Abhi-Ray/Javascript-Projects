let button = document.querySelector('#img');
let body = document.querySelector('body');
let nav = document.querySelector('.navigation');
let cont = document.querySelector('.content');
let head = document.querySelector('.heading');
let box = document.querySelector('.box');
let fb = document.querySelector('.fb');
let twi = document.querySelector('.twi');
let insta = document.querySelector('.insta');


button.onclick = function(){
    button.classList.toggle('active');
    body.classList.toggle('dark');
    nav.classList.toggle('darknav');
    cont.classList.toggle('darkcont');
    head.classList.toggle('darkhead');
    box.classList.toggle('darkbox');
    fb.classList.toggle('darkfb');
    twi.classList.toggle('darktwi');
    insta.classList.toggle('darkinsta');

}

let menu = document.querySelector('.menu');
let navshow = document.querySelector('.navigation');
let header = document.querySelector('header');
let newmain = document.querySelector('main');
let newfooter = document.querySelector('footer');

menu.onclick = () => {
    navshow.classList.toggle('navactive');
    menu.classList.toggle('cross');
    header.classList.toggle('newheader');
    newmain.classList.toggle('newmain');
    newfooter.classList.toggle('newfooter');

}

