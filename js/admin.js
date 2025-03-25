// 관리자 로그인 처리
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const adminPanel = document.querySelector('.admin-panel');
    const loginBox = document.querySelector('.login-box');
    const logoutBtn = document.getElementById('logout-btn');

    // 로그인 폼 제출 처리
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // 관리자 계정 확인
            if (username === 'admin' && password === 'cattowel2024!') {
                // 로그인 성공
                loginSuccess();
            } else {
                // 로그인 실패
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');
            }
        });
    }

    // 로그아웃 버튼 처리
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            logout();
        });
    }

    // 페이지 로드 시 로그인 상태 확인
    checkLoginStatus();

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
        }
    }
}); 