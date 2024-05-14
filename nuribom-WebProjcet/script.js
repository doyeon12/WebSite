document.addEventListener('DOMContentLoaded', function () {
    // 다음 슬라이드로 이동하는 함수
    function moveSlideNext() {
        const footer = document.querySelector('.footer2');
        const lastItem = footer.lastElementChild;
        footer.removeChild(lastItem);
        footer.insertBefore(lastItem, footer.firstElementChild);
    }

    // 이전 슬라이드로 이동하는 함수
    function moveSlidePrev() {
        const footer = document.querySelector('.footer2');
        const firstItem = footer.firstElementChild;
        footer.removeChild(firstItem);
        footer.appendChild(firstItem);
    }

    // 이전 버튼 클릭 이벤트
    const prevButton = document.querySelector('.sixBox .pop-footer2 button:first-of-type');
    prevButton.addEventListener('click', function () {
        moveSlidePrev();
    });

    // 다음 버튼 클릭 이벤트
    const nextButton = document.querySelector('.sixBox .pop-footer2 button:last-of-type');
    nextButton.addEventListener('click', function () {
        moveSlideNext();
    });
});
