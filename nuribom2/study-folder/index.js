const idioms = [
    {
        idiom: "불치하문 (不恥下問)",
        description: "아랫사람에게 묻는 것을 결코 부끄럽게 여기지 않는다.",
        quotes: [
            "가장 현명한 사람은 질문을 두려워하지 않는 사람이다. - 알베르트 아인슈타인",
            "질문을 많이 하는 것은 배움의 시작이다. - 존 로크"
        ]
    },
    {
        idiom: "살신성인 (殺身成仁)",
        description: "자기 몸을 희생하여 옳은 일을 이룬다.",
        quotes: [
            "희생 없이 얻는 것은 아무것도 없다. - 프리드리히 니체",
            "옳은 일을 위해 희생하는 것은 위대한 용기이다. - 마하트마 간디"
        ]
    },
    {
        idiom: "심심상인 (心心相印)",
        description: "말없이 마음과 마음으로 뜻을 전함.",
        quotes: [
            "진정한 소통은 말없이 이루어진다. - 헨리 워즈워스 롱펠로",
            "마음으로 이해하는 것이 진정한 이해다. - 공자"
        ]
    }
];

function showQuotes() {
    const selectedIdiom = document.getElementById("idiomSelect").value;
    const result = idioms.find(idiom => idiom.idiom === selectedIdiom);
    const quoteDisplay = document.getElementById("quoteDisplay");

    if (result && result.quotes.length > 0) {
        quoteDisplay.innerHTML = result.quotes.map(quote => `<p>${quote}</p>`).join('');
    } else {
        quoteDisplay.innerHTML = `<p>관련 명언을 찾을 수 없습니다.</p>`;
    }
}
