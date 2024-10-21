// 댓글 추가 기능
function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    // 댓글 내용이 비어 있지 않은 경우에만 추가
    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");

        newComment.innerHTML = `
            <p>${commentInput.value}</p>
            <button class="like-button" onclick="likeComment(this)">좋아요<span>0</span></button>
        `;

        commentList.appendChild(newComment);
        commentInput.value = ""; // 입력창 초기화
    }
}

// 좋아요 기능
function likeComment(button) {
    const likeCount = button.querySelector("span");
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1; // 좋아요 수 증가
}

// 페이지가 로드될 때 저장된 댓글 불러오기
window.onload = () => {
    loadComments();
};

// 댓글 추가 기능
function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    if (commentInput.value.trim() !== "") {
        const newComment = {
            text: commentInput.value,
            likes: 0
        };

        // 저장된 댓글 목록을 가져와서 새로운 댓글 추가
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(comments));

        // 화면에 댓글 추가
        displayComment(newComment);
        commentInput.value = ""; // 입력창 초기화
    }
}

// 댓글 목록 로드 및 표시
function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => displayComment(comment));
}

// 댓글을 화면에 표시하는 함수
function displayComment(comment) {
    const commentList = document.getElementById("commentList");
    const newComment = document.createElement("div");
    newComment.classList.add("comment");

    newComment.innerHTML = `
        <p>${comment.text}</p>
        <button class="like-button" onclick="likeComment(this)">${comment.likes} 좋아요<span>${comment.likes}</span></button>
    `;

    commentList.appendChild(newComment);
}

// 페이지가 로드될 때 저장된 댓글 불러오기
window.onload = () => {
    loadComments();
};

// 댓글 추가 기능
function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    // 댓글 내용이 비어있지 않은지 확인
    if (commentInput.value.trim() !== "") {
        // 등록 확인
        const confirmAdd = confirm("댓글을 등록 하시겠습니까?");
        if (confirmAdd) {
            const newComment = {
                text: commentInput.value,
                likes: 0
            };

            // 저장된 댓글 목록을 가져와서 새로운 댓글 추가
            let comments = JSON.parse(localStorage.getItem("comments")) || [];
            comments.push(newComment);
            localStorage.setItem("comments", JSON.stringify(comments));

            // 화면에 댓글 추가
            displayComment(newComment);
            commentInput.value = ""; // 입력창 초기화
        }
    }
}

// 댓글 목록 로드 및 표시
function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => displayComment(comment));
}

// 댓글을 화면에 표시하는 함수
function displayComment(comment) {
    const commentList = document.getElementById("commentList");
    const newComment = document.createElement("div");
    newComment.classList.add("comment");

    newComment.innerHTML = `
        <p>${comment.text}</p>
        <button class="like-button" onclick="likeComment(this)">${comment.likes} 좋아요<span>${comment.likes}</span></button>
        <button class="delete-button" onclick="deleteComment(this)">삭제</button>
    `;

    commentList.appendChild(newComment);
}

// 좋아요 기능
function likeComment(button) {
    const likeCount = button.querySelector("span");
    let count = parseInt(likeCount.textContent);
    count += 1;
    likeCount.textContent = count; // 좋아요 수 증가

    // 댓글 목록 업데이트
    const commentText = button.parentElement.querySelector("p").textContent;
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    const comment = comments.find(c => c.text === commentText);
    if (comment) {
        comment.likes = count;
        localStorage.setItem("comments", JSON.stringify(comments));
    }
}

// 댓글 삭제 기능
function deleteComment(button) {
    const commentText = button.parentElement.querySelector("p").textContent;
    
    // 삭제 확인
    const confirmDelete = confirm("댓글을 삭제하시겠습니까?");
    if (confirmDelete) {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        
        // 삭제할 댓글 필터링
        comments = comments.filter(c => c.text !== commentText);
        
        // 업데이트된 댓글 목록 저장
        localStorage.setItem("comments", JSON.stringify(comments));
        
        // 화면에서 댓글 삭제
        button.parentElement.remove();
    }
}