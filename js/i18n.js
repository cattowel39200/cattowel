// 언어 데이터
const translations = {
    ko: {
        menu: {
            about: '소개',
            universe: '세계관',
            stories: '이야기',
            daily: '일상',
            gallery: '갤러리'
        },
        hero: {
            title: '철학적 고양이 수건',
            subtitle: '수건을 쓴 고양이의 지혜로운 이야기',
            story: '이야기 보기'
        },
        about: {
            title: 'CattaWel 소개',
            description1: '켓타월은 평범한 고양이들이 수건을 두름으로써 특별한 깨달음을 얻게 되는 순간부터 시작됩니다. 그들은 수건이라는 평범한 일상 속 도구를 통해 깊은 철학적 통찰력을 얻고, 이를 통해 현대 사회의 다양한 모습을 관찰하고 해석합니다.',
            description2: '의사, 건설노동자, 교사, 예술가 등 다양한 직업을 가진 고양이들은 각자의 위치에서 세상을 바라보며, 그들만의 독특한 시각으로 우리 사회의 모순과 아이러니를 포착합니다. 때로는 진지하게, 때로는 유머러스하게 세상을 바라보는 그들의 시선은 우리에게 새로운 통찰을 제공합니다.'
        }
    },
    en: {
        menu: {
            about: 'About',
            universe: 'Universe',
            stories: 'Stories',
            daily: 'Daily',
            gallery: 'Gallery'
        },
        hero: {
            title: 'Philosophical Cat Towel',
            subtitle: 'Wise tales of a cat with a towel',
            story: 'View Story'
        },
        about: {
            title: 'About CattaWel',
            description1: 'CattaWel begins when ordinary cats gain extraordinary insights by wearing towels. Through this everyday item, they acquire deep philosophical perspectives that allow them to observe and interpret various aspects of modern society.',
            description2: 'Cats from diverse professions - doctors, construction workers, teachers, artists - observe the world from their unique positions, capturing societal contradictions and ironies through their distinctive viewpoints. Their perspective, sometimes serious and sometimes humorous, offers us new insights.'
        }
    },
    ja: {
        menu: {
            about: '紹介',
            universe: '世界観',
            stories: '物語',
            daily: '日常',
            gallery: 'ギャラリー'
        },
        hero: {
            title: '哲学的な猫タオル',
            subtitle: 'タオルをかぶった猫の賢い物語',
            story: '物語を見る'
        },
        about: {
            title: 'CattaWelについて',
            description1: 'キャタウェルは、普通の猫たちがタオルをかぶることで特別な悟りを得る瞬間から始まります。彼らは日常的なアイテムであるタオルを通じて深い哲学的洞察力を得て、現代社会の様々な姿を観察し解釈します。',
            description2: '医師、建設作業員、教師、アーティストなど、様々な職業を持つ猫たちは、それぞれの立場から世界を見つめ、独自の視点で社会の矛盾やアイロニーを捉えます。時には真剣に、時にはユーモアを交えて世界を見つめる彼らの視線は、私たちに新たな洞察を提供します。'
        }
    },
    zh: {
        menu: {
            about: '介绍',
            universe: '世界观',
            stories: '故事',
            daily: '日常',
            gallery: '画廊'
        },
        hero: {
            title: '哲学猫毛巾',
            subtitle: '戴着毛巾的猫的智慧故事',
            story: '查看故事'
        },
        about: {
            title: '关于CattaWel',
            description1: 'CattaWel始于普通猫咪通过戴上毛巾获得特殊启示的时刻。通过这个日常用品，他们获得深刻的哲学洞察力，从而观察和诠释现代社会的各个方面。',
            description2: '来自不同职业的猫咪——医生、建筑工人、教师、艺术家，从各自的位置观察世界，以其独特的视角捕捉社会的矛盾和讽刺。他们时而严肃、时而幽默的世界观为我们提供了新的见解。'
        }
    },
    fr: {
        menu: {
            about: 'À propos',
            universe: 'Univers',
            stories: 'Histoires',
            daily: 'Quotidien',
            gallery: 'Galerie'
        },
        hero: {
            title: 'Serviette de Chat Philosophique',
            subtitle: 'Contes sages d\'un chat avec une serviette',
            story: 'Voir l\'histoire'
        },
        about: {
            title: 'À propos de CattaWel',
            description1: 'CattaWel commence lorsque des chats ordinaires acquièrent des perspectives extraordinaires en portant des serviettes. À travers cet objet du quotidien, ils acquièrent des perspectives philosophiques profondes qui leur permettent d\'observer et d\'interpréter divers aspects de la société moderne.',
            description2: 'Des chats de diverses professions - médecins, ouvriers du bâtiment, enseignants, artistes - observent le monde depuis leurs positions uniques, capturant les contradictions et les ironies sociétales à travers leurs points de vue distinctifs. Leur perspective, tantôt sérieuse, tantôt humoristique, nous offre de nouvelles perspectives.'
        }
    },
    de: {
        menu: {
            about: 'Über uns',
            universe: 'Universum',
            stories: 'Geschichten',
            daily: 'Täglich',
            gallery: 'Galerie'
        },
        hero: {
            title: 'Philosophisches Katzenhandtuch',
            subtitle: 'Weise Geschichten einer Katze mit einem Handtuch',
            story: 'Geschichte ansehen'
        },
        about: {
            title: 'Über CattaWel',
            description1: 'CattaWel beginnt, wenn gewöhnliche Katzen durch das Tragen von Handtüchern außergewöhnliche Einsichten gewinnen. Durch diesen Alltagsgegenstand erlangen sie tiefe philosophische Perspektiven, die es ihnen ermöglichen, verschiedene Aspekte der modernen Gesellschaft zu beobachten und zu interpretieren.',
            description2: 'Katzen aus verschiedenen Berufen - Ärzte, Bauarbeiter, Lehrer, Künstler - beobachten die Welt von ihren einzigartigen Positionen aus und erfassen gesellschaftliche Widersprüche und Ironien durch ihre charakteristischen Sichtweisen. Ihre Perspektive, mal ernst und mal humorvoll, bietet uns neue Einblicke.'
        }
    },
    es: {
        menu: {
            about: 'Acerca de',
            universe: 'Universo',
            stories: 'Historias',
            daily: 'Diario',
            gallery: 'Galería'
        },
        hero: {
            title: 'Toalla de Gato Filosófica',
            subtitle: 'Cuentos sabios de un gato con una toalla',
            story: 'Ver historia'
        },
        about: {
            title: 'Acerca de CattaWel',
            description1: 'CattaWel comienza cuando gatos ordinarios obtienen perspectivas extraordinarias al usar toallas. A través de este objeto cotidiano, adquieren perspectivas filosóficas profundas que les permiten observar e interpretar varios aspectos de la sociedad moderna.',
            description2: 'Gatos de diversas profesiones - médicos, trabajadores de la construcción, maestros, artistas - observan el mundo desde sus posiciones únicas, capturando contradicciones e ironías sociales a través de sus distintivos puntos de vista. Su perspectiva, a veces seria y a veces humorística, nos ofrece nuevas percepciones.'
        }
    }
};

// 현재 언어 설정
let currentLang = localStorage.getItem('selectedLanguage') || 'ko';
document.documentElement.lang = currentLang;

// 언어 변경 함수
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    updateContent();
}

// 콘텐츠 업데이트 함수
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[currentLang];
        
        // 번역 키 찾기
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        // 번역 적용
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // 현재 언어 표시 업데이트
    const currentLangDisplay = document.querySelector('.current-lang');
    const selectedLang = document.querySelector(`[data-lang="${currentLang}"]`);
    if (currentLangDisplay && selectedLang) {
        currentLangDisplay.textContent = selectedLang.textContent.trim();
    }
}

// 언어 선택 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.language-dropdown');
    const langItems = document.querySelectorAll('.language-dropdown li');

    // 언어 드롭다운 토글
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // 언어 선택
    langItems.forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.getAttribute('data-lang');
            changeLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });

    // 초기 콘텐츠 업데이트
    updateContent();
}); 