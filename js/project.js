function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || window.location.hash.replace("#", "");
}

function findCurrentProject() {
  const id = getProjectIdFromUrl();
  return portfolioData.projects.find((project) => project.id === id);
}

function renderProjectNotFound() {
  const root = document.getElementById("projectRoot");
  const dictionary = getDictionary();

  root.innerHTML = `
    <section class="empty-state container">
      <span class="eyebrow">${dictionary.caseSnapshot}</span>
      <h1>${dictionary.projectNotFoundTitle}</h1>
      <p>${dictionary.projectNotFoundText}</p>
      <a class="btn btn-primary" href="index.html#projects">${dictionary.backToProjects}</a>
    </section>
  `;
}

function renderProjectPage() {
  const root = document.getElementById("projectRoot");
  const project = findCurrentProject();
  const lang = getCurrentLanguage();
  const dictionary = getDictionary(lang);

  if (!root) return;
  if (!project) {
    renderProjectNotFound();
    return;
  }

  const images = project.images
    .map(
      (image) => `
    <figure class="case-visual-card">
      <img src="${image.src}" alt="${localize(image.alt, lang)}">
    </figure>
  `,
    )
    .join("");

  const prototypeButton = project.prototypeUrl
    ? `
    <a class="btn btn-primary" target="_blank" rel="noopener" href="${project.prototypeUrl}">
      ${dictionary.viewPrototype}
    </a>
  `
    : "";

  const presentationButton = project.presentationUrl
    ? `
    <a class="btn btn-secondary" target="_blank" rel="noopener" href="${project.presentationUrl}">
      ${dictionary.viewPresentationPdf}
    </a>
  `
    : "";

  document.title = `${localize(project.title, lang)} — Ruba Alghamdi`;

  root.innerHTML = `
    <section class="section project-page">
      <div class="case-layout-container">
        <a class="back-link" href="index.html#projects">${dictionary.backToProjects}</a>

        <div class="case-layout">
          <aside class="case-info-panel reveal">
            <span class="eyebrow">${localize(project.type, lang)}</span>
            <h1>${localize(project.title, lang)}</h1>
            <p class="case-description">${localize(project.detailDesc, lang)}</p>

            <div class="case-summary">
              <div>
                <span>${dictionary.roleLabel}</span>
                <strong>${localize(project.role, lang)}</strong>
              </div>
              <div>
                <span>${dictionary.toolsLabel}</span>
                <strong>${project.tools.join(" · ")}</strong>
              </div>
              <div>
                <span>${dictionary.deliverablesLabel}</span>
                <strong>${localize(project.deliverables, lang)}</strong>
              </div>
            </div>

            <div class="case-actions">
              ${prototypeButton}
              ${presentationButton}
            </div>
          </aside>

          <div class="case-visual-panel">
          <div class="case-visual-grid reveal">
              ${images}
            </div>
            <div class="case-visual-heading reveal">
              <span>${dictionary.caseSnapshot}</span>
              <p>${localize(project.overview, lang)}</p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  `;

  initScrollReveal();
}

window.addEventListener("languagechange", renderProjectPage);

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguageToggle();
  renderProjectPage();
  initCommonInteractions();
});
