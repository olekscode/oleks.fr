export function parseAuthorName(fullName) {
  const value = String(fullName || '').trim();

  if (!value) {
    return { full: '', display: '', short: '', surname: '', given: '' };
  }

  if (value.includes(',')) {
    const [surnameRaw, givenRaw] = value.split(',').map((part) => part.trim());
    const surname = surnameRaw || '';
    const given = givenRaw || '';
    const givenParts = given.split(/\s+/).filter(Boolean);

    const initials = givenParts.map((part) => `${part[0]}.`).join(' ');
    const display = [given, surname].filter(Boolean).join(' ').trim();
    const short = [initials, surname].filter(Boolean).join(' ').trim();

    return {
      full: value,
      display,
      short,
      surname,
      given
    };
  }

  const parts = value.split(/\s+/).filter(Boolean);
  const surname = parts.slice(-1)[0] || '';
  const givenParts = parts.slice(0, -1);
  const given = givenParts.join(' ');
  const initials = givenParts.map((part) => `${part[0]}.`).join(' ');
  const display = value;
  const short = [initials, surname].filter(Boolean).join(' ').trim();

  return {
    full: value,
    display,
    short,
    surname,
    given
  };
}

export function formatAuthorsFull(authors = []) {
  return authors.map((author) => parseAuthorName(author).display);
}

export function formatAuthorsShort(authors = []) {
  return authors.map((author) => parseAuthorName(author).short);
}

export function getPublicationPrimaryContainer(item) {
  if (item.type === 'journal article') return item.journal || '';
  if (item.type === 'conference paper' || item.type === 'workshop paper') return item.event || '';
  if (item.type === 'book chapter') return item.book || '';
  if (item.type === 'technical report') return item.institution || '';
  if (item.type === 'thesis') return item.institution || '';
  if (item.type === 'booklet') return item.publisher || '';
  return '';
}

export function getPublicationListDescription(item) {
  const authors = formatAuthorsShort(item.authors).join(', ');
  const container = getPublicationPrimaryContainer(item);
  return [authors, container].filter(Boolean).join(' — ');
}

export function getPublicationPdfLink(item) {
  if (item.pdf?.openAccess) {
    return {
      href: item.pdf.openAccess,
      label: 'PDF'
    };
  }

  if (item.pdf?.preprint) {
    return {
      href: item.pdf.preprint,
      label: 'PDF'
    };
  }

  return null;
}

export function getPublicationSecondaryLinks(item) {
  const links = [];

  if (item.officialUrl) {
    links.push({
      href: item.officialUrl,
      label: 'Official page'
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

  if (item.doi) {
    links.push({
      href: `https://doi.org/${item.doi}`,
      label: 'DOI'
    });
  }

  return links;
}

export function getPublicationMetaShort(item) {
  return [String(item.year), item.type].filter(Boolean).join(' · ');
}

export function getPublicationMetaLine(item) {
  if (item.type === 'journal article') {
    return [
      String(item.year),
      item.type,
      item.journal,
      item.volume ? `vol. ${item.volume}` : null,
      item.issue ? `no. ${item.issue}` : null,
      item.pages ? `pp. ${item.pages}` : null,
      item.articleNumber ? `article ${item.articleNumber}` : null,
      item.publisher
    ].filter(Boolean).join(' · ');
  }

  if (item.type === 'conference paper' || item.type === 'workshop paper') {
    const location = [item.city, item.country].filter(Boolean).join(', ');

    return [
      String(item.year),
      item.type,
      item.event,
      location,
      item.pages ? `pp. ${item.pages}` : null,
      item.series,
      item.publisher
    ].filter(Boolean).join(' · ');
  }

  if (item.type === 'book chapter') {
    return [
      String(item.year),
      item.type,
      item.book,
      item.pages ? `pp. ${item.pages}` : null,
      item.publisher
    ].filter(Boolean).join(' · ');
  }

  if (item.type === 'technical report') {
    return [
      String(item.year),
      item.type,
      item.institution || null
    ].filter(Boolean).join(' · ');
  }

  if (item.type === 'thesis') {
    const thesisLabel =
      item.thesisType === 'phd'
        ? 'PhD thesis'
        : item.thesisType === 'master'
          ? "Master's thesis"
          : 'Thesis';

    return [
      String(item.year),
      thesisLabel,
      item.institution
    ].filter(Boolean).join(' · ');
  }

  if (item.type === 'booklet') {
    return [
      String(item.year),
      item.type,
      item.publisher
    ].filter(Boolean).join(' · ');
  }

  return [String(item.year), item.type].filter(Boolean).join(' · ');
}

export function toBibtexKey(item) {
  const firstAuthor = parseAuthorName(item.authors?.[0] || '');
  const surname = (firstAuthor.surname || 'unknown').toLowerCase().replace(/[^a-z0-9]/g, '');
  const firstWord = (item.title || 'publication')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .find(Boolean) || 'publication';

  return `${surname}${item.year}${firstWord}`;
}

export function toBibtexType(item) {
  if (item.type === 'journal article') return '@article';
  if (item.type === 'conference paper') return '@inproceedings';
  if (item.type === 'workshop paper') return '@inproceedings';
  if (item.type === 'book chapter') return '@incollection';
  if (item.type === 'technical report') return '@techreport';
  if (item.type === 'booklet') return '@booklet';
  if (item.type === 'thesis') {
    if (item.thesisType === 'phd') return '@phdthesis';
    if (item.thesisType === 'master') return '@mastersthesis';
    return '@thesis';
  }
  return '@misc';
}

export function formatBibtex(item) {
  const bibType = toBibtexType(item);
  const key = toBibtexKey(item);
  const fields = [];

  fields.push(`  title = {${item.title}}`);
  fields.push(`  author = {${(item.authors || []).join(' and ')}}`);
  fields.push(`  year = {${item.year}}`);

  if (item.month) fields.push(`  month = {${item.month}}`);

  if (item.type === 'journal article') {
    if (item.journal) fields.push(`  journal = {${item.journal}}`);
    if (item.volume) fields.push(`  volume = {${item.volume}}`);
    if (item.issue) fields.push(`  number = {${item.issue}}`);
    if (item.pages) fields.push(`  pages = {${item.pages}}`);
    if (item.articleNumber) fields.push(`  articleno = {${item.articleNumber}}`);
    if (item.publisher) fields.push(`  publisher = {${item.publisher}}`);
    if (item.issn) fields.push(`  issn = {${item.issn}}`);
  }

  if (item.type === 'conference paper' || item.type === 'workshop paper') {
    if (item.event) fields.push(`  booktitle = {${item.event}}`);
    if (item.series) fields.push(`  series = {${item.series}}`);
    if (item.publisher) fields.push(`  publisher = {${item.publisher}}`);
    if (item.pages) fields.push(`  pages = {${item.pages}}`);
    if (item.isbn) fields.push(`  isbn = {${item.isbn}}`);
    const address = [item.city, item.country].filter(Boolean).join(', ');
    if (address) fields.push(`  address = {${address}}`);
  }

  if (item.type === 'book chapter') {
    if (item.book) fields.push(`  booktitle = {${item.book}}`);
    if (item.editors?.length) fields.push(`  editor = {${item.editors.join(' and ')}}`);
    if (item.publisher) fields.push(`  publisher = {${item.publisher}}`);
    if (item.pages) fields.push(`  pages = {${item.pages}}`);
    if (item.isbn) fields.push(`  isbn = {${item.isbn}}`);
  }

  if (item.type === 'technical report') {
    if (item.institution) fields.push(`  institution = {${item.institution}}`);
  }

  if (item.type === 'thesis') {
    if (item.institution) fields.push(`  school = {${item.institution}}`);
  }

  if (item.type === 'booklet') {
    if (item.publisher) fields.push(`  howpublished = {${item.publisher}}`);
    if (item.isbn) fields.push(`  isbn = {${item.isbn}}`);
  }

  if (item.doi) fields.push(`  doi = {${item.doi}}`);
  if (item.officialUrl) fields.push(`  url = {${item.officialUrl}}`);

  return `${bibType}{${key},\n${fields.join(',\n')}\n}`;
}