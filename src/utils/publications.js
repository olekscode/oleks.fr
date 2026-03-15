export function shortenAuthorName(fullName) {
  const parts = fullName.trim().split(/\s+/);

  if (parts.length <= 1) return fullName;

  const lastName = parts[parts.length - 1];
  const initials = parts
    .slice(0, -1)
    .map((part) => `${part[0]}.`)
    .join(' ');

  return `${initials} ${lastName}`;
}

export function shortenAuthors(authors = []) {
  return authors.map(shortenAuthorName);
}

export function getPublicationPdfLink(item) {
  if (item.access?.pdf?.url) {
    return {
      href: item.access.pdf.url,
      label: item.access.pdf.openAccess ? 'Download PDF' : 'PDF'
    };
  }

  if (item.access?.preprint?.url) {
    return {
      href: item.access.preprint.url,
      label: 'Download preprint PDF'
    };
  }

  return null;
}

export function getPublicationSecondaryLinks(item) {
  const links = [];

  if (item.official?.url) {
    links.push({
      href: item.official.url,
      label: item.official.label || 'Official page'
    });
  }

  if (item.archives?.hal) {
    links.push({ href: item.archives.hal, label: 'HAL' });
  }

  if (item.archives?.arxiv) {
    links.push({ href: item.archives.arxiv, label: 'arXiv' });
  }

  if (item.archives?.agritrop) {
    links.push({ href: item.archives.agritrop, label: 'AgriTrop' });
  }

  if (item.identifiers?.doi) {
    links.push({
      href: `https://doi.org/${item.identifiers.doi}`,
      label: 'DOI'
    });
  }

  return links;
}

export function toBibtexKey(item) {
  const firstAuthor = item.authors?.[0] || 'unknown';
  const lastName = firstAuthor.trim().split(/\s+/).slice(-1)[0].toLowerCase();
  const firstWord = (item.title || 'publication')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .find(Boolean) || 'publication';

  return `${lastName}${item.year}${firstWord}`;
}

export function toBibtexType(item) {
  if (item.type === 'journal article') return '@article';
  if (item.type === 'conference paper') return '@inproceedings';
  if (item.type === 'book chapter') return '@incollection';
  return '@misc';
}

export function formatBibtex(item) {
  const bibType = toBibtexType(item);
  const key = toBibtexKey(item);
  const fields = [];

  fields.push(`  title = {${item.title}}`);
  fields.push(`  author = {${(item.authors || []).join(' and ')}}`);
  fields.push(`  year = {${item.year}}`);

  if (item.venue) {
    if (item.type === 'journal article') {
      fields.push(`  journal = {${item.venue}}`);
    } else if (item.type === 'conference paper') {
      fields.push(`  booktitle = {${item.venue}}`);
    } else {
      fields.push(`  howpublished = {${item.venue}}`);
    }
  }

  if (item.publisher) {
    fields.push(`  publisher = {${item.publisher}}`);
  }

  if (item.identifiers?.doi) {
    fields.push(`  doi = {${item.identifiers.doi}}`);
  }

  if (item.official?.url) {
    fields.push(`  url = {${item.official.url}}`);
  }

  return `${bibType}{${key},\n${fields.join(',\n')}\n}`;
}