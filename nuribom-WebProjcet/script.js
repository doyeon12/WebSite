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

    // 8번 버튼에 대한 슬라이드 이동 함수
    function moveSlidePrevEight() {
        const footerEight = document.querySelector('.eightBox .pop-footer2 .footer2');
        const lastItemEight = footerEight.lastElementChild;
        footerEight.removeChild(lastItemEight);
        footerEight.insertBefore(lastItemEight, footerEight.firstElementChild);
    }

    function moveSlideNextEight() {
        const footerEight = document.querySelector('.eightBox .pop-footer2 .footer2');
        const firstItemEight = footerEight.firstElementChild;
        footerEight.removeChild(firstItemEight);
        footerEight.appendChild(firstItemEight);
    }

    // 이전 버튼 클릭 이벤트 (8번 버튼)
    const prevButtonEight = document.querySelector('.eightBox .pop-footer2 button:first-of-type');
    prevButtonEight.addEventListener('click', function () {
        moveSlidePrevEight();
    });

    // 다음 버튼 클릭 이벤트 (8번 버튼)
    const nextButtonEight = document.querySelector('.eightBox .pop-footer2 button:last-of-type');
    nextButtonEight.addEventListener('click', function () {
        moveSlideNextEight();
    });

    // 10번 버튼에 대한 슬라이드 이동 함수
    function moveSlidePrevTen() {
        const footerTen = document.querySelector('.tenBox .pop-footer2 .footer2');
        const lastItemTen = footerTen.lastElementChild;
        footerTen.removeChild(lastItemTen);
        footerTen.insertBefore(lastItemTen, footerTen.firstElementChild);
    }

    function moveSlideNextTen() {
        const footerTen = document.querySelector('.tenBox .pop-footer2 .footer2');
        const firstItemTen = footerTen.firstElementChild;
        footerTen.removeChild(firstItemTen);
        footerTen.appendChild(firstItemTen);
    }

    // 이전 버튼 클릭 이벤트 (10번 버튼)
    const prevButtonTen = document.querySelector('.tenBox .pop-footer2 button:first-of-type');
    prevButtonTen.addEventListener('click', function () {
        moveSlidePrevTen();
    });

    // 다음 버튼 클릭 이벤트 (10번 버튼)
    const nextButtonTen = document.querySelector('.tenBox .pop-footer2 button:last-of-type');
    nextButtonTen.addEventListener('click', function () {
        moveSlideNextTen();
    });
});
