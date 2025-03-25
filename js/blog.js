// 게시물 데이터 로드
async function loadPosts() {
    try {
        const response = await fetch('data/posts.json');
        const posts = await response.json();
        displayPosts(posts);
        updateRecentPosts(posts);
    } catch (error) {
        console.error('게시물을 불러오는 중 오류가 발생했습니다:', error);
        document.getElementById('posts-container').innerHTML = `
            <div class="error-message">
                <p>게시물을 불러오는 중 오류가 발생했습니다.</p>
                <p>잠시 후 다시 시도해주세요.</p>
            </div>
        `;
    }
}

// 게시물 표시
function displayPosts(posts, category = 'all') {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    const filteredPosts = category === 'all' 
        ? posts 
        : posts.filter(post => post.category === category);

    if (filteredPosts.length === 0) {
        container.innerHTML = `
            <div class="no-posts">
                <p>해당 카테고리의 게시물이 없습니다.</p>
            </div>
        `;
        return;
    }

    filteredPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <div class="post-meta">
                <span><i class="far fa-calendar"></i> ${post.date}</span>
                <span><i class="fas fa-user"></i> ${post.author}</span>
                <span class="post-category">
                    <i class="fas fa-tag"></i> ${getCategoryName(post.category)}
                </span>
            </div>
            <p class="post-summary">${post.summary}</p>
            <div class="post-content">${post.content}</div>
        `;
        container.appendChild(postElement);
    });
}

// 최근 게시물 업데이트
function updateRecentPosts(posts) {
    const recentPostsList = document.getElementById('recent-posts-list');
    const recentPosts = posts.slice(0, 5); // 최근 5개 게시물

    recentPostsList.innerHTML = recentPosts.map(post => `
        <li>
            <a href="#" data-post-id="${post.id}">
                <i class="fas fa-file-alt"></i>
                ${post.title}
            </a>
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

// 카테고리 필터링
document.querySelectorAll('.categories a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        document.querySelectorAll('.categories a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
        loadPosts().then(posts => displayPosts(posts, category));
    });
});

// 페이지 로드 시 게시물 로드
document.addEventListener('DOMContentLoaded', loadPosts); 