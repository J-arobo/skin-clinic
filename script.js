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




/*============= Services Menu =============*/
/*------- Toggle Menu -------*/
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}


/*=========== EMAIL JS ===========*/

const contactForm = document.getElementById('contact-form'), 
    contactMessage = document.getElementById('contact-message')

function sendEmail() {
    let parms = {
        // one of the columns has to be removed - hence the name column
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,    
     }

     emailjs.send("service_m8tu8sa", "template_135uq1o",parms).then(()=>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset() 
     }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
     })
}
contactForm.addEventListener('submit', sendEmail)

/*
const contactForm = document.getElementById('contact-form'), 
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefaut()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_m8tu8sa','template_135uq1o','#contact-form','5Y4xXmdU_Vnj592Kx')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset()

    }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)
*/
