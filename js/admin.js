// 관리자 로그인 처리
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const adminPanel = document.querySelector('.admin-panel');
    const loginBox = document.querySelector('.login-box');

    // 로그인 폼 제출 처리
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // 관리자 계정 확인
            if (username === 'admin' && password === 'cattowel2024!') {
                // 로그인 성공
                loginBox.style.display = 'none';
                adminPanel.style.display = 'block';
                localStorage.setItem('isAdminLoggedIn', 'true');
            } else {
                // 로그인 실패
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');
            }
        });
    }

    // 페이지 로드 시 로그인 상태 확인
    if (localStorage.getItem('isAdminLoggedIn') === 'true') {
        loginBox.style.display = 'none';
        adminPanel.style.display = 'block';
    }

    // 로그아웃 기능 추가
    const logoutButton = document.createElement('button');
    logoutButton.textContent = '로그아웃';
    logoutButton.className = 'btn-primary';
    logoutButton.style.marginTop = '20px';
    
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('isAdminLoggedIn');
        loginBox.style.display = 'block';
        adminPanel.style.display = 'none';
    });

    // 관리자 패널에 로그아웃 버튼 추가
    if (adminPanel) {
        adminPanel.insertBefore(logoutButton, adminPanel.firstChild);
    }
}); 