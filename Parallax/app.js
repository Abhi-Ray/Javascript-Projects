let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let front = document.querySelector('#behind');
let behind = document.querySelector('#front');
let text = document.querySelector('.text');
let btn = document.querySelector('.btn');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * .25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    behind.style.top = value * 0.5 + 'px';
    front.style.top = value*0 + 'px';
    text.style.marginRight = value*4 + 'px';
    text.style.marginTop = value*1.5 + 'px';
    btn.style.marginTop = value*1.5 + 'px';
    header.style.Top = value*0.5 + 'px';
    
    
    
})
