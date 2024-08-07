document.addEventListener('DOMContentLoaded', function () {
    // 로그인 관련 코드
    const loginButton = document.querySelector('.headerBtn a'); // Select the login link
    const loginModal = document.querySelector('.logb');
    const closeButton = document.querySelector('.logb .close1');
    const loginSubmitButton = document.querySelector('.logb .push');

    // 로그인 버튼 클릭 시 로그인 모달 열기
    loginButton.addEventListener('click', function () {
        loginModal.style.display = 'block';
    });

    // 닫기 버튼 클릭 시 로그인 모달 닫기
    closeButton.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    // 로그인 제출 버튼 클릭 시 입력 값 확인
    loginSubmitButton.addEventListener('click', function () {
        const idInput = loginModal.querySelector('input[type="text"]');
        const passwordInput = loginModal.querySelector('input[type="password"]');

        // 아이디에 한글이 포함되었는지 확인
        const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

        if (idInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('다시 시도해주세요.');
        } else if (koreanRegex.test(idInput.value)) {
            alert('영어만 사용 가능');
        } else {
            alert('로그인 성공!');
            idInput.value = '';
            passwordInput.value = '';
            window.location.href = 'index.html';
            logoutButton.style.display = 'inline-block';
        }
    });

    // 로그아웃 버튼 클릭 시 메시지 표시
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            if (confirm('로그아웃 하시겠습니까?')) {
                alert('다시 로그인을 시도해 주세요.');
                location.href = "index.html";
            }
        });
    }

    // 오디오 관련 코드
    const audioIcon = document.getElementById('audio-icon');
    const audio = document.getElementById('audio');

    if (audioIcon && audio) {
        audioIcon.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    }

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

    const idiomText = document.getElementById('idiom-text');
    const hintText = document.querySelector('.hint-text p');
    const prevButton = document.querySelector('.idiom-main button:first-of-type');
    const nextButton = document.querySelector('.idiom-main button:last-of-type');

    let currentIndex = 0;

    // 힌트 업데이트 함수
    function updateHint() {
        const currentIdiom = idioms[currentIndex];
        hintText.textContent = hints[currentIdiom];
    }

    // 이전 버튼 클릭 시
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + idioms.length) % idioms.length;
        idiomText.textContent = idioms[currentIndex];
        updateHint();
    });

    // 다음 버튼 클릭 시
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % idioms.length;
        idiomText.textContent = idioms[currentIndex];
        updateHint();
    });

    // 초기 텍스트 설정
    idiomText.textContent = idioms[currentIndex];
    updateHint();
});
