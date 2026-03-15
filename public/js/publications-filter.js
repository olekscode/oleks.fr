document.addEventListener('DOMContentLoaded', () => {
  const typeFilter = document.getElementById('publication-filter-type');
  const yearFilter = document.getElementById('publication-filter-year');
  const searchInput = document.getElementById('publication-search');
  const sortSelect = document.getElementById('publication-sort');
  const results = document.getElementById('publication-results');
  const emptyState = document.getElementById('publication-empty');

  if (
    !(typeFilter instanceof HTMLSelectElement) ||
    !(yearFilter instanceof HTMLSelectElement) ||
    !(searchInput instanceof HTMLInputElement) ||
    !(sortSelect instanceof HTMLSelectElement) ||
    !(results instanceof HTMLElement) ||
    !(emptyState instanceof HTMLElement)
  ) {
    console.error('Publication filter elements are missing or invalid.');
    return;
  }

  function getRows() {
    return Array.from(results.querySelectorAll('.publication-row'));
  }

  function sortRows() {
    const rows = getRows();
    const visibleRows = rows.filter((row) => !row.classList.contains('is-hidden'));
    const hiddenRows = rows.filter((row) => row.classList.contains('is-hidden'));
    const mode = sortSelect.value;

    visibleRows.sort((a, b) => {
      const yearA = Number(a.dataset.year || '0');
      const yearB = Number(b.dataset.year || '0');
      const titleA = a.dataset.title || '';
      const titleB = b.dataset.title || '';

      if (mode === 'year-asc') {
        return yearA - yearB || titleA.localeCompare(titleB);
      }

      if (mode === 'title-asc') {
        return titleA.localeCompare(titleB);
      }

      return yearB - yearA || titleA.localeCompare(titleB);
    });

    [...visibleRows, ...hiddenRows].forEach((row) => {
      results.appendChild(row);
    });
  }

  function applyFilters() {
    const typeValue = typeFilter.value;
    const yearValue = yearFilter.value;
    const query = searchInput.value.trim().toLowerCase();
    const rows = getRows();

    rows.forEach((row) => {
      const type = row.dataset.type || '';
      const year = row.dataset.year || '';
      const title = row.dataset.title || '';
      const venue = row.dataset.venue || '';
      const authors = row.dataset.authors || '';

      const matchesType = typeValue === 'all' || type === typeValue;
      const matchesYear = yearValue === 'all' || year === yearValue;
      const haystack = `${title} ${venue} ${authors}`;
      const matchesQuery = query === '' || haystack.includes(query);

      const isVisible = matchesType && matchesYear && matchesQuery;
      row.classList.toggle('is-hidden', !isVisible);
    });

    sortRows();

    const hasVisibleRows = getRows().some((row) => !row.classList.contains('is-hidden'));
    emptyState.hidden = hasVisibleRows;
  }

  typeFilter.addEventListener('change', applyFilters);
  yearFilter.addEventListener('change', applyFilters);
  searchInput.addEventListener('input', applyFilters);
  sortSelect.addEventListener('change', applyFilters);

  applyFilters();
});