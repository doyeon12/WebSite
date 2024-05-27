document.addEventListener("DOMContentLoaded", function() {
    const leftBtn = document.querySelector('.footerBtn button:first-child');
    const rightBtn = document.querySelector('.footerBtn button:last-child');
    const windowElem = document.querySelector('.window');
    const liList = document.querySelectorAll('.footerBtn li');

    let currentPosition = 0;
    const liWidth = liList[0].offsetWidth;
    const windowWidth = windowElem.offsetWidth;
    const visibleBtns = Math.floor(windowWidth / liWidth);
    const totalBtns = liList.length;

    // 오른쪽 버튼 클릭 시
    rightBtn.addEventListener('click', function() {
        currentPosition -= liWidth;
        if (currentPosition < -liWidth * (totalBtns - visibleBtns)) {
            currentPosition = -liWidth * (totalBtns - visibleBtns);
        }
        windowElem.style.transform = `translateX(${currentPosition}px)`;
    });

    // 왼쪽 버튼 클릭 시
    leftBtn.addEventListener('click', function() {
        currentPosition += liWidth;
        if (currentPosition > 0) {
            currentPosition = 0;
        }
        windowElem.style.transform = `translateX(${currentPosition}px)`;
    });
});
