const idioms = [
    {
        idiom: "불치하문 (不恥下問)",
        description: "아랫사람에게 묻는 것을 결코 부끄럽게 여기지 않는다.",
        quotes: [
            "가장 현명한 사람은 질문을 두려워하지 않는 사람이다.",
            "-알베르트 아인슈타인-",
        ],
        image: "/nuribom2/img/아인슈타인.jpeg"
    },
    {
        idiom: "살신성인 (殺身成仁)",
        description: "자기 몸을 희생하여 옳은 일을 이룬다.",
        quotes: [
            "옳은 일을 위해 희생하는 것은 위대한 용기이다.",
            "-마하트마 간디-"
        ],
        image: "/nuribom2/img/간디.jpg"
    },
    {
        idiom: "심심상인 (心心相印)",
        description: "말없이 마음과 마음으로 뜻을 전함.",
        quotes: [
            "마음으로 이해하는 것이 진정한 이해다.",
            "-공자-"
        ],
        image: "/nuribom2/img/공자.jpg"
    },
    {
        idiom: "일취월장 (日就月將)",
        description: "나날이 발전하고 나아감.",
        quotes: [
            "끊임없이 노력하는 자가 성공을 거머쥔다.",
            "-토마스 에디슨-"
        ],
        image: "/nuribom2/img/에디슨.webp"
    },
    {
        idiom: "과유불급 (過猶不及)",
        description: "지나침은 모자람만 못하다.",
        quotes: [
            "균형을 유지하는 것은 모든 것의 핵심이다.",
            "-아리스토텔레스-"
        ],
        image: "/nuribom2/img/아리스토텔레스.jpg"
    },
    {
        idiom: "타산지석 (他山之石)",
        description: "다른 사람의 하찮은 언행이라도 배울 점이 있다.",
        quotes: [
            "다른 사람의 실수에서 배워라.",
            "-벤자민 프랭클린-"
        ],
        image: "/nuribom2/img/프랭클린.jpg"
    }
];

function showQuotes() {
    const selectedIdiom = document.getElementById("idiomSelect").value;
    const result = idioms.find(idiom => idiom.idiom === selectedIdiom);
    const quoteDisplay = document.getElementById("quoteDisplay");
    const imageDisplay = document.getElementById("imageDisplay");

    if (result) {
        // 명언 표시
        if (result.quotes.length > 0) {
            quoteDisplay.innerHTML = result.quotes.map(quote => `<p>${quote}</p>`).join('');
        } else {
            quoteDisplay.innerHTML = `<p>관련 명언을 찾을 수 없습니다.</p>`;
        }

        // 이미지 표시
        if (result.image) {
            imageDisplay.innerHTML = `<img src="${result.image}" alt="Image related to ${result.idiom}" style="max-width: 200px; max-height: 200px;">`;
        } else {
            imageDisplay.innerHTML = ''; // 이미지가 없을 경우 비우기
        }
    } else {
        quoteDisplay.innerHTML = `<p>관련 명언이 여기에 표시됩니다.</p>`;
        imageDisplay.innerHTML = ''; // 기본 상태로 이미지 비우기
    }

    // 아인슈타인 사진 사이즈
    if (result.image) {
        imageDisplay.innerHTML = `<img src="${result.image}" alt="Image related to ${result.idiom}" class="image-display">`;
    } else {
        imageDisplay.innerHTML = ''; // 이미지가 없을 경우 비우기
    }
}
