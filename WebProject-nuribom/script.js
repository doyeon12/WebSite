document.addEventListener('DOMContentLoaded', () => {
    const slideContainers = document.querySelectorAll('.slide-container');
    const slideLeftButtons = document.querySelectorAll('.slide-left');
    const slideRightButtons = document.querySelectorAll('.slide-right');
    
    slideContainers.forEach((container, index) => {
        const slideLeftButton = slideLeftButtons[index];
        const slideRightButton = slideRightButtons[index];
        let currentIndex = 0;
        const slideWidth = 200; // 각 슬라이드의 너비와 동일하게 설정
        const maxIndex = container.querySelectorAll('li').length - 1;

        slideRightButton.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlide(container, currentIndex, slideWidth);
            }
        });

        slideLeftButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlide(container, currentIndex, slideWidth);
            }
        });
    });
});

function updateSlide(container, index, width) {
    container.style.transform = `translateX(-${index * width}px)`;
}
