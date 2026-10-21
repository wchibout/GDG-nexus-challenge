# GDG Nexus

GDG Nexus is a fast, accessible directory for exploring countries, developer communities, technology hubs, and research labs. It was built by **Chibout Wahb** for the GDG Algiers challenge, with a focus on clear presentation, forgiving search, and a polished browsing experience.

## Live Demo

[Open the GDG Nexus demo](https://wchibout.github.io/GDG-nexus-challenge/)

## What it does

- Searches entities by name, category, and keywords.
- Matches partial words, so `land` finds entries such as Iceland, Ireland, and the Netherlands.
- Ignores accents and common punctuation differences, so queries such as `cote divoire` match `Côte d'Ivoire`.
- Provides keyboard navigation for autocomplete results.
- Displays the selected entity with its region, description, code, and related keywords.
- Lets users filter the directory by entity category.
- Includes responsive layouts for desktop and mobile screens.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Available scripts

```bash
npm run dev    # Start the development server
npm run lint   # Run the TypeScript check
npm run build  # Create a production build
npm run preview # Preview the production build locally
```

## Project structure

```text
src/
├── components/       Reusable interface components
├── App.tsx           Main application layout and state
├── data.js           Directory entries
├── searchEngine.ts   Search, normalization, and highlighting
├── types.ts          Shared TypeScript types
└── index.css         Global styles
```

## Deployment

The project is deployed to GitHub Pages through the workflow in [`/.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml). A push to the `main` branch builds the application and publishes the generated `dist` directory.

## License

This project is provided for the GDG Nexus challenge.
