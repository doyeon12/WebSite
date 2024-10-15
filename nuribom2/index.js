const CAROUSEL_LENGTH = document.querySelectorAll(".idiom-items > div").length - 1;
let current = 0;

const $carousel = document.querySelector(".idiom-items");
const $prevbutton = document.querySelector(".prev-button");
const $nextbutton = document.querySelector(".next-button");

const nextEvent = () => {
    if (current < CAROUSEL_LENGTH) {
        current++;
    } else {
        current = 0;
    }
    $carousel.style.transform = `translateX(${current * -800}px)`;
};

const prevEvent = () => {
    if (current > 0) {
        current--;
    } else {
        current = CAROUSEL_LENGTH;
    }
    $carousel.style.transform = `translateX(${current * -800}px)`;
};

$prevbutton.addEventListener("click", prevEvent);
$nextbutton.addEventListener("click", nextEvent);
