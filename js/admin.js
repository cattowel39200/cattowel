// 관리자 로그인 처리
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const adminPanel = document.querySelector('.admin-panel');
    const loginBox = document.querySelector('.login-box');
    const logoutBtn = document.getElementById('logout-btn');
    const postForm = document.getElementById('post-form');

    // 로그인 폼 제출 처리
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // 관리자 계정 확인
            if (username === 'admin' && password === 'cattowel2024!') {
                loginSuccess();
                loadPosts(); // 로그인 성공 시 게시물 목록 로드
            } else {
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');
            }
        });
    }

    // 로그아웃 버튼 처리
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }

    // 게시물 작성 폼 처리
    if (postForm) {
        postForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const title = document.getElementById('post-title').value;
            const category = document.getElementById('post-category').value;
            const summary = document.getElementById('post-summary').value;
            const content = document.getElementById('post-content').value;

            const newPost = {
                id: Date.now(), // 고유 ID 생성
                title,
                category,
                summary,
                content,
                date: new Date().toISOString().split('T')[0],
                author: '관리자'
            };

            try {
                // 기존 게시물 로드
                const response = await fetch('data/posts.json');
                let posts = [];
                if (response.ok) {
                    posts = await response.json();
                }

                // 새 게시물 추가
                posts.unshift(newPost);

                // 게시물 저장
                await savePostsToFile(posts);

                // 폼 초기화 및 알림
                postForm.reset();
                alert('게시물이 성공적으로 저장되었습니다.');
                
                // 게시물 목록 새로고침
                loadPosts();
            } catch (error) {
                console.error('게시물 저장 중 오류 발생:', error);
                alert('게시물 저장에 실패했습니다. 다시 시도해주세요.');
            }
        });
    }

    // 페이지 로드 시 로그인 상태 확인
    checkLoginStatus();
});

// 게시물을 파일에 저장
async function savePostsToFile(posts) {
    try {
        const response = await fetch('/save-posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(posts)
        });

        if (!response.ok) {
            throw new Error('게시물 저장에 실패했습니다.');
        }
    } catch (error) {
        console.error('게시물 저장 중 오류 발생:', error);
        throw error;
    }
}

// 게시물 목록 로드
async function loadPosts() {
    try {
        const response = await fetch('data/posts.json');
        if (response.ok) {
            const posts = await response.json();
            displayPosts(posts);
        }
    } catch (error) {
        console.error('게시물을 불러오는 중 오류가 발생했습니다:', error);
    }
}

// 게시물 목록 표시
function displayPosts(posts) {
    const postList = document.getElementById('admin-post-list');
    if (!postList) return;

    postList.innerHTML = posts.map(post => `
        <li class="post-item">
            <div class="post-info">
                <h4>${post.title}</h4>
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-tag"></i> ${getCategoryName(post.category)}</span>
                </div>
            </div>
            <div class="post-actions">
                <button onclick="editPost(${post.id})" class="btn-edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deletePost(${post.id})" class="btn-delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </li>
    `).join('');
}

// 카테고리 이름 변환
function getCategoryName(category) {
    const categories = {
        'story': '스토리',
        'news': '소식',
        'tips': '팁과 노하우'
    };
    return categories[category] || category;
}

// 게시물 수정
function editPost(postId) {
    // TODO: 게시물 수정 기능 구현
    alert('게시물 수정 기능은 준비 중입니다.');
}

// 게시물 삭제
async function deletePost(postId) {
    if (!confirm('정말 이 게시물을 삭제하시겠습니까?')) {
        return;
    }

    try {
        const response = await fetch('data/posts.json');
        let posts = await response.json();
        
        posts = posts.filter(post => post.id !== postId);
        
        await savePostsToFile(posts);
        loadPosts();
        alert('게시물이 삭제되었습니다.');
    } catch (error) {
        console.error('게시물 삭제 중 오류 발생:', error);
        alert('게시물 삭제에 실패했습니다.');
    }
}

// 로그인 성공 시 처리
function loginSuccess() {
    loginBox.style.display = 'none';
    adminPanel.style.display = 'block';
    localStorage.setItem('isAdminLoggedIn', 'true');
}

// 로그아웃 처리
function logout() {
    localStorage.removeItem('isAdminLoggedIn');
    loginBox.style.display = 'block';
    adminPanel.style.display = 'none';
}

// 로그인 상태 확인
function checkLoginStatus() {
    if (localStorage.getItem('isAdminLoggedIn') === 'true') {
        loginSuccess();
        loadPosts();
    }
} 