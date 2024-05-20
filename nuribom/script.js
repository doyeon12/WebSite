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
        alert('로그인 되었습니다!');
    });
});
