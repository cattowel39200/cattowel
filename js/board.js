const boardData = [
    {
        id: 1,
        title: "타월캣 커뮤니티 오픈 안내",
        content: "철학적 타월캣 커뮤니티가 공식 오픈했습니다. 많은 참여 부탁드립니다. 우리는 타월을 두른 고양이들의 철학적 세계관을 통해 현대 사회를 바라보고 있습니다.",
        author: "Admin",
        date: "2024-03-23",
        category: "공지사항"
    },
    {
        id: 2,
        title: "첫 번째 밈 콘테스트 개최",
        content: "타월캣의 철학적 관점을 담은 밈 콘테스트를 개최합니다. 우승자에게는 특별한 NFT가 제공됩니다. 여러분의 창의적인 밈을 기다립니다!",
        author: "Event Team",
        date: "2024-03-24",
        category: "이벤트"
    },
    {
        id: 3,
        title: "주간 철학 토론: '타월의 의미'",
        content: "이번 주 토론 주제는 '고양이에게 있어 타월의 철학적 의미'입니다. 많은 참여 바랍니다. 타월은 단순한 천 조각이 아닌, 우리의 정체성을 나타내는 상징입니다.",
        author: "Philosophy Team",
        date: "2024-03-25",
        category: "토론"
    }
];

function createBoardElement(post) {
    const boardItem = document.createElement('div');
    boardItem.className = 'board-item';
    boardItem.innerHTML = `
        <div class="board-category">${post.category}</div>
        <h3 class="board-title">${post.title}</h3>
        <div class="board-meta">
            <span class="board-author">${post.author}</span>
            <span class="board-date">${post.date}</span>
        </div>
    `;
    
    boardItem.addEventListener('click', () => showPostDetail(post));
    return boardItem;
}

function initializeBoard() {
    const boardContainer = document.querySelector('.board-container');
    if (!boardContainer) {
        console.error('게시판 컨테이너를 찾을 수 없습니다.');
        return;
    }

    const sortedPosts = [...boardData].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedPosts.forEach(post => {
        const boardItem = createBoardElement(post);
        boardContainer.appendChild(boardItem);
    });
}

function showPostDetail(post) {
    const modal = document.createElement('div');
    modal.className = 'board-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-category">${post.category}</span>
                <h2>${post.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>${post.content}</p>
                <div class="modal-meta">
                    <span>작성자: ${post.author}</span>
                    <span>작성일: ${post.date}</span>
                </div>
            </div>
        </div>
    `;

    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeBoard();
}); 