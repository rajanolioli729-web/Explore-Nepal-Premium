
//    NAVBAR SCROLL EFFECT

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



//    SCROLL REVEAL ANIMATION

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



//    TYPING EFFECT

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



//    LOADER

window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');

    loader.style.opacity = '0';

    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);

});



//    PROGRESS BAR

window.addEventListener('scroll', () => {

    const progressBar = document.querySelector('.progress-bar');

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});




//    SMOOTH SCROLL

function scrollToDestinations() {

    const section =
        document.getElementById("destinations");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}