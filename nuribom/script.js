document.addEventListener('DOMContentLoaded', function () {
    // 로그인 관련 코드
    const loginButton = document.querySelector('.headerBtn button:nth-of-type(1)');
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
            // 입력 필드 값을 지우기
            idInput.value = '';
            passwordInput.value = '';
            // 홈 페이지로 리다이렉트
            window.location.href = 'index.html'; // 홈 페이지의 URL을 적어주세요
        }
    });

    // 오디오 관련 코드
    const audioIcon = document.getElementById('audio-icon');
    const audio = document.getElementById('audio');

    audioIcon.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
