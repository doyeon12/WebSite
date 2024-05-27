document.addEventListener("DOMContentLoaded", function() {
    const leftBtn = document.querySelector('.footerBtn button:first-child');
    const rightBtn = document.querySelector('.footerBtn button:last-child');
    const windowElem = document.querySelector('.window');
    const liList = document.querySelectorAll('.footerBtn li');

    let currentPosition = 0;
    const liWidth = liList[0].offsetWidth;

    rightBtn.addEventListener('click', function() {
        currentPosition -= liWidth;
        if (currentPosition < -liWidth * (liList.length - 10)) {
            currentPosition = -liWidth * (liList.length - 10);
        }
        windowElem.style.transform = `translateX(${currentPosition}px)`;
    });

    leftBtn.addEventListener('click', function() {
        currentPosition += liWidth;
        if (currentPosition > 0) {
            currentPosition = 0;
        }
        windowElem.style.transform = `translateX(${currentPosition}px)`;
    });
});
