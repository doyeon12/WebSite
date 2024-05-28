document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('#loginButton');
    const loginModal = document.querySelector('.logb');
    const closeButton = document.querySelector('.logb .close1');
    const loginSubmitButton = document.querySelector('.logb .submit');

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
        const inputs = loginModal.querySelectorAll('input');
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFieldsFilled = false;
            }
        });

        if (!allFieldsFilled) {
            alert('다시 시도해주세요.');
        } else {
            alert('로그인 되었습니다!');
            // 입력 필드 값을 지우기
            inputs.forEach(input => input.value = '');
            // 홈 페이지로 리다이렉트
            window.location.href = 'index.html'; // 홈 페이지의 URL을 적어주세요
        }
    });
});
