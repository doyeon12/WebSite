document.addEventListener('DOMContentLoaded', () => {
    const slideContainers = document.querySelectorAll('.slide-container');
    const slideLeftButtons = document.querySelectorAll('.slide-left');
    const slideRightButtons = document.querySelectorAll('.slide-right');

    slideContainers.forEach((container, index) => {
        const slideLeftButton = slideLeftButtons[index];
        const slideRightButton = slideRightButtons[index];
        let currentIndex = 0;
        const slideWidth = 200; // 각 슬라이드의 너비와 동일하게 설정
        const maxIndex = Math.min(container.querySelectorAll('li').length - 1, 2); // 최대 페이지 수를 3페이지로 제한

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

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const currentSlide = document.querySelector('.current-slide');

    let currentIndex = 1;
    const maxIndex = 3; // 최대 페이지 수를 3페이지로 제한

    // 이전 슬라이드로 이동하는 함수
    prevButton.addEventListener('click', () => {
        if (currentIndex > 1) {
            currentIndex--;
            currentSlide.textContent = currentIndex;
        }
    });

    // 다음 슬라이드로 이동하는 함수
    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            currentSlide.textContent = currentIndex;
        }
    });
});

function updateSlide(container, index, width) {
    container.style.transform = `translateX(-${index * width}px)`;
}
