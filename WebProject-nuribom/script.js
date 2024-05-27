document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalb = document.querySelector('.modalb');
    const slideWindow = document.querySelector('.window');
    const prevBtn = slideWindow.querySelector('button:first-of-type');
    const nextBtn = slideWindow.querySelector('button:last-of-type');
    const slideItems = slideWindow.querySelectorAll('li');

    let currentIndex = 0;
    const maxIndex = slideItems.length - 1;
    const slideWidth = slideItems[0].offsetWidth;

    // 왼쪽 버튼 클릭 시 슬라이드 이동
    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; // 첫 번째 슬라이드에서 이전 버튼 클릭 시 마지막 슬라이드로 이동
        }
        updateSlidePosition();
    });

    // 오른쪽 버튼 클릭 시 슬라이드 이동
    nextBtn.addEventListener('click', function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // 마지막 슬라이드에서 다음 버튼 클릭 시 첫 번째 슬라이드로 이동
        }
        updateSlidePosition();
    });

    // 슬라이드 위치 업데이트 함수
    function updateSlidePosition() {
        const newPosition = -currentIndex * slideWidth;
        slideWindow.style.transform = `translateX(${newPosition}px)`;
    }
});
