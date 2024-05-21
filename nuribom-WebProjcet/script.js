document.addEventListener('DOMContentLoaded', function () {
    // 페이지 이동 버튼 클릭 이벤트
    const prevPageButton = document.querySelector('.page-btn button:first-of-type');
    const nextPageButton = document.querySelector('.page-btn button:last-of-type');
    const pageNumber = document.querySelector('.page-btn h2');

    let currentPage = 1; // 현재 페이지 번호
    const maxPage = 3; // 최대 페이지 번호

    // 이전 페이지로 이동
    prevPageButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
        }
    });

    // 다음 페이지로 이동
    nextPageButton.addEventListener('click', function () {
        if (currentPage < maxPage) {
            currentPage++;
            updatePage();
        }
    });

    // 페이지 업데이트 함수
    function updatePage() {
        pageNumber.textContent = currentPage;
        if (currentPage === 1) {
            prevPageButton.disabled = true;
        } else {
            prevPageButton.disabled = false;
        }
        if (currentPage === maxPage) {
            nextPageButton.disabled = true;
        } else {
            nextPageButton.disabled = false;
        }

        // 페이지에 따라 숫자 표시 변경
        const number1 = document.querySelector('.number1');
        const number2 = document.querySelector('.number2');
        const number3 = document.querySelector('.number3');

        if (currentPage === 1) {
            number1.textContent = '1';
            number2.textContent = '2';
            number3.textContent = '3';
        } else if (currentPage === 2) {
            number1.textContent = '4';
            number2.textContent = '5';
            number3.textContent = '6';
        } else if (currentPage === 3) {
            number1.textContent = '7';
            number2.textContent = '8';
            number3.textContent = '9';
        }
    }

    // 초기 페이지 설정
    updatePage();

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
        const firstItemEight = footerEight.firstElementChild;
        footerEight.removeChild(firstItemEight);
        footerEight.appendChild(firstItemEight);
    }

    function moveSlideNextEight() {
        const footerEight = document.querySelector('.eightBox .pop-footer2 .footer2');
        const lastItemEight = footerEight.lastElementChild;
        footerEight.removeChild(lastItemEight);
        footerEight.insertBefore(lastItemEight, footerEight.firstElementChild);
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
        const firstItemTen = footerTen.firstElementChild;
        footerTen.removeChild(firstItemTen);
        footerTen.appendChild(firstItemTen);
    }

    function moveSlideNextTen() {
        const footerTen = document.querySelector('.tenBox .pop-footer2 .footer2');
        const lastItemTen = footerTen.lastElementChild;
        footerTen.removeChild(lastItemTen);
        footerTen.insertBefore(lastItemTen, footerTen.firstElementChild);
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
