const idioms = [
    { term: "가가대소(呵呵大笑)", meaning: "크게 웃다" },
    { term: "불치하문(不恥下問)", meaning: "아랫사람에게 배우는 것을 부끄러워하지 않다" },
    { term: "심심상인(心心相印)", meaning: "마음과 마음이 서로 통하다" },
    { term: "동분서주(東奔西走)", meaning: "동쪽으로 뛰고 서쪽으로 달리다" }
];

let currentIdiomIndex = 0;
let correctAnswersCount = 0;

// Fisher-Yates 알고리즘을 사용해 배열을 랜덤으로 섞는 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuiz() {
    if (currentIdiomIndex >= idioms.length) {
        // 모든 문제가 끝났을 때 결과 표시 및 페이지 이동
        alert(`시험이 끝났습니다! 맞힌 개수: ${correctAnswersCount} / ${idioms.length}`);
        window.location.href = '/nuribom2/index-folder/index.html'; // index.html로 이동
        return;
    }

    const quizQuestion = document.getElementById("quiz-question");
    const quizOptions = document.getElementById("quiz-options");
    quizQuestion.textContent = `${idioms[currentIdiomIndex].term}의 뜻은 무엇인가요?`;

    // 선택지를 랜덤으로 섞음
    const shuffledIdioms = [...idioms]; // 기존 idioms 배열을 복사
    shuffleArray(shuffledIdioms);

    // 선택지 생성
    quizOptions.innerHTML = "";
    shuffledIdioms.forEach(idiom => {
        const li = document.createElement("li");
        li.textContent = idiom.meaning;
        li.addEventListener("click", () => checkAnswer(idiom.meaning));
        quizOptions.appendChild(li);
    });
}

function checkAnswer(selectedMeaning) {
    const correctMeaning = idioms[currentIdiomIndex].meaning;
    if (selectedMeaning === correctMeaning) {
        alert("정답입니다!");
        correctAnswersCount++;
    } else {
        alert(`틀렸습니다! 정답은 "${correctMeaning}" 입니다.`);
    }
    // 다음 사자성어로 이동
    currentIdiomIndex++;
    displayQuiz();
}

// 페이지 로드 시 첫 퀴즈 표시
window.onload = displayQuiz;
