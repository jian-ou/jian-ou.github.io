// 项目数据（已移除，保留副本到文档库）
const projects = [];

// 加载成果展示数据
function loadAchievements({ randomCount } = {}) {
    const achievementsGrid = document.querySelector('.achievements-grid, .project-grid');
    if (!achievementsGrid || !window.achievements) return;
    let data = window.achievements;
    if (randomCount && data.length > randomCount) {
        // 随机抽取 randomCount 个成果
        data = [...data].sort(() => Math.random() - 0.5).slice(0, randomCount);
    }
    achievementsGrid.innerHTML = data.map(item => `
        <div class="project-card" data-category="achievement">
            ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ''}
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${item.role ? `<p class="role">角色：${item.role}</p>` : ''}
            <div class="technologies">
                ${(item.technologies||[]).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            ${(item.links||[]).map(link => `<a href="${link.url}" target="_blank" style="color:var(--accent-color2);font-size:0.98rem;margin-right:1em;">${link.name}</a>`).join('')}
        </div>
    `).join('');
}

// 初始化项目筛选器
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterProjects(filter);
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// 筛选项目
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
}

// 加载技能
function loadSkills() {
    const skillsGrids = document.querySelectorAll('.skills-grid');
    if (!skillsGrids.length || !window.skills) return;
    const html = window.skills.map(skill =>
        `<a class="skill-card" href="${skill.url}" target="_blank" rel="noopener noreferrer" title="访问${skill.name}官网">
            ${skill.icon ? `<span class='iconify skill-icon' data-icon='${skill.icon}'></span>` : ''}${skill.name}
        </a>`
    ).join('');
    skillsGrids.forEach(grid => grid.innerHTML = html);
}

// 添加页面过渡动画
function addPageTransitions() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s ease-in-out';
    }, 10);
}

// 表单处理
document.addEventListener('submit', (e) => {
    if (e.target.classList.contains('contact-form')) {
        e.preventDefault();
        handleContactForm(e.target);
    }
});

// 处理联系表单
function handleContactForm(form) {
    const formData = new FormData(form);
    // 这里可以添加表单验证和提交逻辑
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('消息已发送！我们会尽快回复您。');
    form.reset();
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    initializeProjectFilters();
    // 首页只显示随机6个成果
    if (location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname === '') {
        loadAchievements({ randomCount: 6 });
    } else {
        loadAchievements();
    }
    loadSkills();
    addPageTransitions();
    document.querySelectorAll('a.hero-btn[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});