document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("push").addEventListener("click", function() {
        // 아이디와 비밀번호 값을 가져옵니다.
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        // 간단한 유효성 검사를 추가할 수 있습니다.
        if (username && password) {
            // 로그인 성공 시 log2.html로 이동합니다.
            alert("로그인 성공")
            window.location.href = "log2.html";
        } else {
            // 아이디 또는 비밀번호가 없을 경우 경고 메시지를 표시합니다.
            alert("아이디와 비밀번호를 입력하세요.");
        }
    });
    

    // 사자성어 슬라이드 기능 및 힌트 업데이트
    const idioms = [
        '고진감래(苦盡甘來)',
        '구사일생(九死一生)',
        '과유불급(過猶不及)',
        '괄목상대(刮目相對)',
        '근묵자흑(近墨者黑)',
        '다다익선(多多益善)',
        '각자도생(各自圖生)',
        '금의야행(錦衣夜行)',
        '능소능대(能小能大)',
        '비육지탄(髀肉之歎)',
        '서리지탄(黍離之歎)'
    ];

    const hints = {
        '고진감래(苦盡甘來)': '괴로움이 다하면 달콤함이 온다는 뜻으로 고생 끝에 낙이 온다는 말',
        '구사일생(九死一生)': '아홉 번 죽을 뻔하다 한 번 살아난다는 뜻으로 죽을 고비를 여러 번 넘기고 간신히 목숨을 건진다는 말',
        '과유불급(過猶不及)': '정도가 지나친 것은 부족한 것보다 못하다는 말',
        '괄목상대(刮目相對)': '눈을 비비고 다시 본다는 뜻으로 상대방의 학문이나 재주가 깜짝 놀랄 만큼 발전했음을 이르는 말',
        '근묵자흑(近墨者黑)': '먹을 가까이하면 검어진다는 뜻으로 좋지 못한 사람과 가까이 지내면 나쁜 것에 물들게 된다는 말',
        '다다익선(多多益善)': '많으면 많을수록 더욱 좋다는 말',
        '각자도생(各自圖生)': '제각기 살아 나갈 방법을 꾀함',
        '금의야행(錦衣夜行)': '비단옷을 입고 밤에 감. 아무 보람이 없는 행동.',
        '능소능대(能小能大)': '작은 일에도 능하고 큰 일에도 능하다는 데서, 모든 일에 두루 능함을 말함.',
        '비육지탄(髀肉之歎)': '재능을 발휘랄 때를 얻지 못하여 헛되이 세월만 보내는 것을 한탄함을 이르는 말',
        '서리지탄(黍離之歎)': '나라가 멸망하여 옛 궁궐터에는 기장만이 무성한 것을 탄식한다는 뜻으로, 세상의 영고성쇠가 무상함을 탄식하며 이르는 말'
    };

    const examples = {
        '고진감래(苦盡甘來)': '그는 힘든 일을 겪은 후, 고진감래의 기쁨을 맛보았다.',
        '구사일생(九死一生)': '영화 속 주인공은 여러 차례 구사일생의 순간을 겪으면서 성장하게 되었다.',
        '과유불급(過猶不及)': '과유불급이라는 말처럼, 모든 일에는 적절한 균형이 필요하다.',
        '괄목상대(刮目相對)': '친구의 놀라운 성장에 괄목상대하지 않을 수 없었다.',
        '근묵자흑(近墨者黑)': '좋은 사람들과 함께하면 근묵자흑의 영향에서 벗어날 수 있다.',
        '다다익선(多多益善)': '자원이 많으면 다다익선이라지만, 너무 많아도 관리가 힘들다.',
        '각자도생(各自圖生)': '비상 상황에서는 각자도생의 자세가 필요하다.',
        '금의야행(錦衣夜行)': '그의 성과는 아무도 알아주지 않아 금의야행이나 다름없었다.',
        '능소능대(能小能大)': '그는 능소능대의 인재로서 회사의 핵심 역할을 맡고 있다.',
        '비육지탄(髀肉之歎)': '비육지탄의 시간을 보내지 않기 위해 꾸준히 노력해야 한다.',
        '서리지탄(黍離之歎)': '옛날의 영화를 회상하며 서리지탄의 감정을 느꼈다.'
    };

    const idiomText = document.getElementById('idiom-text');
    const hintText = document.querySelector('.hint-text p');
    const exampleText = document.querySelector('.ex-text p');
    const prevButton = document.querySelector('.idiom-main button:first-of-type');
    const nextButton = document.querySelector('.idiom-main button:last-of-type');

    let currentIndex = 1;  // 초기 인덱스는 1 (구사일생)

    // 힌트와 예시 업데이트 함수
    function updateContent() {
        const currentIdiom = idioms[currentIndex];
        hintText.textContent = hints[currentIdiom];
        exampleText.textContent = examples[currentIdiom];
    }

    // 이전 버튼 클릭 시
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + idioms.length) % idioms.length;
        idiomText.textContent = idioms[currentIndex];
        updateContent();
    });

    // 다음 버튼 클릭 시
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % idioms.length;
        idiomText.textContent = idioms[currentIndex];
        updateContent();
    });

    // 초기 텍스트 설정
    idiomText.textContent = idioms[currentIndex];
    updateContent();
});
