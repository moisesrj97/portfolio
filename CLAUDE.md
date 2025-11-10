# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro, featuring information about experience, education, projects, and talks. The site is deployed at https://moisesrj.dev/.

## Commands

**Package Manager**: This project uses pnpm (version 10.11.0+)

- `pnpm dev` or `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Check code with Biome
- `pnpm lint:fix` - Fix linting issues with Biome

## Code Architecture

### Data-Driven Content

The portfolio content is managed through TypeScript data files in `src/data/`:
- `info.ts` - Central configuration exporting all portfolio data
- `experience.ts` - Work experience entries
- `education.ts` - Education history
- `projects.ts` - Project listings with featured flags
- `talks.ts` - Public speaking engagements

All data follows TypeScript interfaces defined in `src/types/index.ts`.

### Page Structure

- **Pages** (`src/pages/`): Three main routes
  - `index.astro` - Home page displaying hero, experience, education, and featured projects
  - `projects.astro` - Full project gallery
  - `talks.astro` - Speaking engagements list

- **Layouts** (`src/layouts/`): `Layout.astro` provides consistent structure with Navbar, main content area, and Footer

- **Components** (`src/components/`):
  - `general/` - Reusable components (MetaHead, Navbar, Footer, ProjectCard, ProjectsWrapper)
  - `home/` - Home page specific components (Hero, Experience)

### Styling & Configuration

- **TailwindCSS** for styling with custom configuration in `tailwind.config.cjs`
- **Biome** for linting and formatting (replaces ESLint/Prettier)
  - Uses tab indentation and double quotes
  - Organizes imports automatically
  - Special rules for `.astro` files (unused imports/variables disabled)
- **Astro Integrations**: sitemap, robots.txt

### Site Configuration

The site URL is configured in `astro.config.mjs` as `https://moisesrj.dev/` which affects sitemap generation and canonical URLs.

## Content Updates

To update portfolio content, modify the appropriate data file in `src/data/`. The type system will ensure data structure consistency.
