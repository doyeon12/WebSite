document.addEventListener('DOMContentLoaded', function () {
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

        if (idInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('다시 시도해주세요.');
        } else {
            alert('로그인 되었습니다!');
            // 입력 필드 값을 지우기
            idInput.value = '';
            passwordInput.value = '';
            // 홈 페이지로 리다이렉트
            window.location.href = 'index.html'; // 홈 페이지의 URL을 적어주세요
        }
    });
});
