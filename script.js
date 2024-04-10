 /*
 let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
} 
*/


/*========= SHOW MENU =========*/
const navMenu = document.querySelector('.navbar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*==========MENU SHOW ========*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('active')
    })
}

/*==========MENU HIDDEN ========*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('active')
    })
}

/*=========== REMOVE MENU MOBILE ===========*/
const navlink = document.querySelectorAll('.nav__link')
 
const linkAction = () =>{
    const navMenu = document.querySelector('.navbar')
    // when we click on each nav__link, we remove the active menu class
    navMenu.classList.remove('active')
}
navlink.forEach(n => n.addEventListener('click', linkAction))
