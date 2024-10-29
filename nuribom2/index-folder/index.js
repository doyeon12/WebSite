const CAROUSEL_LENGTH = document.querySelectorAll(".idiom-items > div").length - 1;
let current = 0;

const $carousel = document.querySelector(".idiom-items");
const $prevbutton = document.querySelector(".prev-button");
const $nextbutton = document.querySelector(".next-button");

const nextEvent = () => {
    if (current < CAROUSEL_LENGTH) {
        current++;
    } else {
        current = 0;
    }
    $carousel.style.transform = `translateX(${current * -800}px)`;
};

const prevEvent = () => {
    if (current > 0) {
        current--;
    } else {
        current = CAROUSEL_LENGTH;
    }
    $carousel.style.transform = `translateX(${current * -800}px)`;
};

$prevbutton.addEventListener("click", prevEvent);
$nextbutton.addEventListener("click", nextEvent);

function github(){
    window.open("https://github.com/doyeon12");
}

function instagram(){
    window.open("https://www.instagram.com/");
}

function facebook(){
    window.open("https://www.facebook.com/");
}

const idioms2 = Array.from(document.querySelectorAll(".idiom-items2 > div")); // 두 번째 사자성어 항목 선택
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim(); // 검색어 가져오기

    // 두 번째 사자성어 항목 필터링
    idioms2.forEach((idiom) => {
        const idiomText = idiom.querySelector("h2").textContent; // 사자성어 텍스트 가져오기
        // 검색어가 포함된 경우
        if (idiomText.includes(searchTerm)) {
            idiom.style.display = "block"; // 해당 항목 보이기
        } else {
            idiom.style.display = "none"; // 해당 항목 숨기기
        }
    });
});
