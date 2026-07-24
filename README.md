# anilaygunn.github.io

Personal portfolio site for Anıl Aygün — iOS & Cross-Platform Mobile Engineer.

Built with React and Vite. The Projects section pulls repositories live from
the [GitHub API](https://api.github.com/users/anilaygunn/repos), so it stays
up to date without manual edits.

## Stack

- React
- Vite
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds the site and publishes it to
GitHub Pages.
