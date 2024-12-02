let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
});

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// 自动播放轮播图
setInterval(() => {
    nextSlide();
}, 5000); // 5秒切换一次
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `<p><strong>${username}:</strong> ${comment}</p>`;

        document.getElementById('comments-list').appendChild(commentItem);

        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("comment-form");
    const commentsList = document.getElementById("comments-list");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        const username = document.getElementById("username").value;
        const comment = document.getElementById("comment").value;

        if (username && comment) {
            addCommentToPage(username, comment);
            commentForm.reset(); // 清空表单
        }
    });

    function addCommentToPage(username, comment) {
        const newCommentDiv = document.createElement("div");
        newCommentDiv.className = "comment-item";
        newCommentDiv.innerHTML = `<p><strong>${username}:</strong> ${comment}</p>`;
        commentsList.appendChild(newCommentDiv);
    }
});
