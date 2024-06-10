document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 정규 표현식으로 한글 포함 여부 확인
    var koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    // 한글 포함 여부 체크
    if (koreanRegex.test(username) || koreanRegex.test(password)) {
        alert('아이디와 비밀번호에 한글을 포함할 수 없습니다. 다시 입력해주세요.');
        return;
    }

    // 로그인 성공 여부를 판단하는 로직
    if (username && password) {
        alert('로그인 성공');
    } else {
        alert('아이디와 비밀번호를 입력해주세요.');
    }
});
