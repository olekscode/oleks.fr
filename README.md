# oleks.fr responsive starter

Researcher-first Astro starter for `oleks.fr`.

## Stack

- Astro
- JavaScript only
- Markdown / MDX for authored content
- JSON for structured data
- Pure CSS
- GitHub Pages ready

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Main editing points

| Task | File or folder |
|---|---|
| Add a blog post | `src/content/blog/` |
| Add a project | `src/content/projects/` |
| Update publications | `src/data/publications.json` |
| Update CV summary data | `src/data/cv.json` |
| Update site identity | `src/data/site.json` |
| Update navigation | `src/data/navigation.json` |
| Update social links | `src/data/social.json` |

## Mobile responsiveness

This version is designed mobile-first and scales cleanly from phone to desktop.

## Deployment

Use GitHub Pages with a custom domain. Keep:

```text
public/CNAME
```

with:

```text
oleks.fr
```
