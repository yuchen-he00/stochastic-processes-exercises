function setupInlineTabs() {
  const headings = Array.from(document.querySelectorAll('.md-content h3[id]'));

  headings.forEach((heading) => {
    if (heading.dataset.inlineTabsProcessed === '1') return;

    const tabbedSet = heading.nextElementSibling;
    if (!tabbedSet || !tabbedSet.classList.contains('tabbed-set')) return;

    const labels = Array.from(tabbedSet.querySelectorAll(':scope > .tabbed-labels > label'));
    if (!labels.length) return;

    const controls = document.createElement('span');
    controls.className = 'inline-tab-controls';

    const pairs = labels
      .map((label) => {
        const inputId = label.getAttribute('for');
        if (!inputId) return null;
        const input = tabbedSet.querySelector(`#${CSS.escape(inputId)}`);
        if (!input) return null;
        return { label, input };
      })
      .filter(Boolean);

    if (!pairs.length) return;

    pairs.forEach(({ label, input }) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'inline-tab-btn';
      button.textContent = (label.textContent || '').trim();
      button.setAttribute('aria-label', `Switch to ${button.textContent}`);

      button.addEventListener('click', () => {
        input.checked = true;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });

      controls.appendChild(button);
    });

    const syncActive = () => {
      const buttons = Array.from(controls.querySelectorAll('.inline-tab-btn'));
      pairs.forEach(({ input }, index) => {
        if (!buttons[index]) return;
        buttons[index].classList.toggle('is-active', input.checked);
      });
    };

    pairs.forEach(({ input }) => {
      input.addEventListener('change', syncActive);
    });

    heading.classList.add('with-inline-tabs');
    tabbedSet.classList.add('inline-tabbed');
    heading.appendChild(controls);
    syncActive();

    heading.dataset.inlineTabsProcessed = '1';
  });
}

document$.subscribe(() => {
  setupInlineTabs();
});
