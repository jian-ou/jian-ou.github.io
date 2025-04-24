const blogPosts = [
  {
    title: "如何高效学习嵌入式开发？",
    date: "2025-04-25",
    summary: "分享嵌入式开发的学习路径、常用资源与实战建议，适合初学者和进阶者。",
    url: "blog-detail1.html"
  },
  {
    title: "STM32与FreeRTOS项目实战经验",
    date: "2025-04-20",
    summary: "介绍STM32平台下使用FreeRTOS的常见问题、调试技巧与性能优化方法。",
    url: "#"
  },
];

const BLOGS_PER_PAGE = 10;
let currentPage = 1;

function renderBlogList(page = 1) {
  const blogList = document.querySelector('.blog-list');
  if (!blogList) return;
  const start = (page - 1) * BLOGS_PER_PAGE;
  const end = start + BLOGS_PER_PAGE;
  const pagePosts = blogPosts.slice(start, end);

  blogList.innerHTML = pagePosts.map(post => `
    <div class="blog-card" style="display: flex; align-items: flex-start; gap: 1.2rem;">
      <div style="flex:1;">
        <div class="blog-card-title">${post.title}</div>
        <div class="blog-card-meta">${post.date}</div>
        <div class="blog-card-summary">${post.summary}</div>
      </div>
      <a href="${post.url}" class="blog-read-btn blog-read-btn-vertical" style="margin-top:0.2rem; flex-shrink:0; writing-mode: vertical-rl; text-orientation: mixed; height: 110px; display: flex; align-items: center; justify-content: center;">阅读全文</a>
    </div>
  `).join('');

  renderPagination(page);
}

function renderPagination(page) {
  let pagination = document.querySelector('.blog-pagination');
  if (!pagination) {
    pagination = document.createElement('div');
    pagination.className = 'blog-pagination';
    pagination.style = 'display:flex;justify-content:center;gap:1rem;margin:2rem 0;';
    document.querySelector('.blog-list').after(pagination);
  }
  const totalPages = Math.ceil(blogPosts.length / BLOGS_PER_PAGE);
  let html = '';

  // 只显示最多10个页码，当前页尽量居中
  let startPage = Math.max(1, page - 4);
  let endPage = Math.min(totalPages, startPage + 9);
  if (endPage - startPage < 9) {
    startPage = Math.max(1, endPage - 9);
  }

  if (startPage > 1) {
    html += `<button class="blog-page-btn" data-page="1" style="padding:0.4rem 1.1rem;border-radius:8px;border:none;cursor:pointer;background:#23203a;color:#fff;font-weight:600;">1</button>`;
    if (startPage > 2) html += `<span style="color:#888;padding:0 0.5rem;">...</span>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="blog-page-btn${i === page ? ' active' : ''}" data-page="${i}" style="padding:0.4rem 1.1rem;border-radius:8px;border:none;cursor:pointer;background:${i===page?'var(--accent-color2)':'#23203a'};color:${i===page?'#18122b':'#fff'};font-weight:600;">${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<span style="color:#888;padding:0 0.5rem;">...</span>`;
    html += `<button class="blog-page-btn" data-page="${totalPages}" style="padding:0.4rem 1.1rem;border-radius:8px;border:none;cursor:pointer;background:#23203a;color:#fff;font-weight:600;">${totalPages}</button>`;
  }

  pagination.innerHTML = html;
  pagination.querySelectorAll('.blog-page-btn').forEach(btn => {
    btn.onclick = () => {
      currentPage = Number(btn.dataset.page);
      renderBlogList(currentPage);
    };
  });
}

document.addEventListener('DOMContentLoaded', () => renderBlogList(currentPage));
