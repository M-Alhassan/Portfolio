
//=========================================== Firebase Config ===========================================

// Import the functions you need from the SDKs you need

//----------------- Code ------------------------
// //import { initializeApp } from "firebase/app";
//----------------- Code ------------------------

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


//----------------- Code ------------------------
// const firebaseConfig = {
//   apiKey: "AIzaSyAarRIwfqtuE3W_ZOkNEn1UD__Th67z7nI",
//   authDomain: "portfolio-bc0e3.firebaseapp.com",
//   projectId: "portfolio-bc0e3",
//   storageBucket: "portfolio-bc0e3.appspot.com",
//   messagingSenderId: "86815439841",
//   appId: "1:86815439841:web:eba768eca84b7f111a30a0"
// };
//----------------- Code ------------------------

// Initialize Firebase

//----------------- Code ------------------------
// const app = initializeApp(firebaseConfig);
//----------------- Code ------------------------

//=========================================== Firebase Config ===========================================

//Show navbar (desktop)
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//Remove navbar (mobile)
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Scroll sections for active links
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//==========================================================================================
//Fix problem where the header and about seciton's animation does not work
//Check if it's better to set the reset to true or false
//The reset resets the animation once you move on to another section of the page
//==========================================================================================

//Scroll reveal aimation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
   // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
