document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.row-link[data-href]');

  rows.forEach((row) => {
    row.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest('[data-stop-row-click="true"]')) {
        return;
      }

      const href = row.dataset.href;
      if (href) {
        window.location.href = href;
      }
    });

    row.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        const target = event.target;
        if (target instanceof HTMLElement && target.closest('[data-stop-row-click="true"]')) {
          return;
        }

        event.preventDefault();
        const href = row.dataset.href;
        if (href) {
          window.location.href = href;
        }
      }
    });
  });
});