function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const lang = getCurrentLanguage();

  grid.innerHTML = portfolioData.projects.map((project) => {
    const tags = project.tags.map((tag) => `<li>${localize(tag, lang)}</li>`).join('');

    return `
      <a class="project-card reveal interactive-tilt" href="project.html?id=${project.id}" aria-label="${localize(project.title, lang)}">
        <div class="project-media">
          <img src="${project.cover}" alt="${localize(project.title, lang)}">
        </div>
        <div class="project-info">
          <span class="project-type">${localize(project.type, lang)}</span>
          <h3>${localize(project.title, lang)}</h3>
          <p>${localize(project.cardText, lang)}</p>
          <ul class="project-meta">${tags}</ul>
        </div>
      </a>
    `;
  }).join('');
}

function renderSkills() {
  const board = document.getElementById('gravitySkills');
  if (!board) return;

  destroyGravitySkills(board);

  const lang = getCurrentLanguage();
  board.innerHTML = portfolioData.skills
    .map((skill) => `<span class="gravity-bubble">${localize(skill, lang)}</span>`)
    .join('');

  requestAnimationFrame(() => initGravitySkills());
}

function renderHomeDynamicContent() {
  renderProjects();
  renderSkills();
  initScrollReveal();
  initInteractiveTilt();
}

window.addEventListener('languagechange', () => {
  renderHomeDynamicContent();
});

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguageToggle();
  renderHomeDynamicContent();
  initCommonInteractions();
});
