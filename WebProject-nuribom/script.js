// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.slide-container');
    const slideLeftButton = document.querySelector('.slide-left');
    const slideRightButton = document.querySelector('.slide-right');
    
    let currentIndex = 0;
    const slideWidth = 200; // 각 슬라이드의 너비와 동일하게 설정

    slideRightButton.addEventListener('click', () => {
        currentIndex++;
        slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });

    slideLeftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    });
});
