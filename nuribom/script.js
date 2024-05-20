document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.headerBtn button:nth-of-type(1)');
    const loginModal = document.querySelector('.logb');

    loginButton.addEventListener('click', function () {
        loginModal.style.display = 'block';
    });

    const closeButton = document.querySelector('.logb .close1');

    closeButton.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    const loginSubmitButton = document.querySelector('.logb .push');

    loginSubmitButton.addEventListener('click', function () {
        const inputs = loginModal.querySelectorAll('input');
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFieldsFilled = false;
            }
        });

        if (!allFieldsFilled) {
            alert('다시 시도해주세요');
        } else {
            alert('로그인 되었습니다!');
            // 입력 필드 값을 지우기
            inputs.forEach(input => input.value = '');
        }
    });
});
