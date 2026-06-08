/* ========================================
   NAVBAR SCROLL EFFECT
======================================== */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.75)';
        navbar.style.padding = '18px 6%';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.25)';
        navbar.style.padding = '25px 6%';
    }
});


/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */
const allCards = document.querySelectorAll('.card');

function revealCards() {
    const triggerBottom = window.innerHeight / 1.2;

    allCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealCards);
revealCards();


/* ========================================
   TYPING EFFECT
======================================== */
const text = "Discover The Beauty Of Nepal";
let index = 0;

function typingEffect() {
    const typing = document.querySelector('.typing');

    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;

        setTimeout(typingEffect, 100);
    }
}

typingEffect();


/* ========================================
   LOADER
======================================== */
window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');

    loader.style.opacity = '0';

    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);

});


/* ========================================
   PROGRESS BAR
======================================== */
window.addEventListener('scroll', () => {

    const progressBar = document.querySelector('.progress-bar');

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ========================================
   POPUP SYSTEM
======================================== */
const popupButtons = document.querySelectorAll(".popup-btn");

popupButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const title = btn.dataset.title;
        const text = btn.dataset.text;
        const img = btn.dataset.img;

        document.getElementById("popup-title").innerText = title;
        document.getElementById("popup-text").innerText = text;
        document.getElementById("popup-img").src = img;

        document.getElementById("popup").style.display = "flex";

    });

});


/* CLOSE POPUP */
function closePopup() {

    document.getElementById("popup").style.display = "none";

}


/* CLICK OUTSIDE TO CLOSE */
document.getElementById("popup").addEventListener("click", function (e) {

    if (e.target.id === "popup") {
        this.style.display = "none";
    }

});


/* ========================================
   RIPPLE EFFECT
======================================== */
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', function (e) {

        const circle = document.createElement('span');

        const diameter = Math.max(
            button.clientWidth,
            button.clientHeight
        );

        const rect = button.getBoundingClientRect();

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - rect.left - diameter / 2}px`;

        circle.style.top =
            `${e.clientY - rect.top - diameter / 2}px`;

        circle.classList.add('ripple');

        const existingRipple =
            button.querySelector('.ripple');

        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(circle);

    });

});


/* ========================================
   SMOOTH SCROLL
======================================== */
function scrollToDestinations() {

    const section =
        document.getElementById("destinations");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}