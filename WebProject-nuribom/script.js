// script.js

const slideList = document.getElementById('slide-list');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPosition = 0;

prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        slideList.style.transform = `translateX(${-currentPosition * 100}%)`;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPosition < slideList.children.length - 1) {
        currentPosition++;
        slideList.style.transform = `
