function getChapterNumber() {
  const match = window.location.pathname.match(/chapter_(\d+)/i);
  if (!match) return null;
  return String(parseInt(match[1], 10));
}

function applyHeadingNumbering() {
  const chapter = getChapterNumber();
  const headings = Array.from(document.querySelectorAll('.md-content h3[id]'));
  const numberMap = new Map();

  headings.forEach((heading, index) => {
    const raw = (heading.dataset.rawTitle || heading.textContent || '').replace(/^\d+(?:\.\d+)*\s+/, '').trim();
    heading.dataset.rawTitle = raw;

    const number = chapter ? `${chapter}.${index + 1}` : `${index + 1}`;
    heading.textContent = `${number} ${raw}`;
    numberMap.set(heading.id, `${number} ${raw}`);
  });

  const tocLinks = Array.from(document.querySelectorAll('.md-nav--secondary a.md-nav__link[href^="#"]'));
  tocLinks.forEach((link) => {
    const id = decodeURIComponent(link.getAttribute('href').slice(1));
    if (!numberMap.has(id)) return;

    const label = link.querySelector('.md-ellipsis');
    if (label) {
      label.textContent = numberMap.get(id);
    } else {
      link.textContent = numberMap.get(id);
    }
  });
}

document$.subscribe(() => {
  applyHeadingNumbering();
});
