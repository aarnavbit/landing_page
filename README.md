# ARNA

## Project Overview

AARNA is the student club at VBIT that turns student skills into income, portfolios and real opportunities. This website serves as the premium creative-tech and student innovation platform for ARNA, introducing the brand, tools, events, gallery, and team members.

## Tech Stack

- React
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- Motion (framer-motion)
- GSAP
- Lucide React

## Project Structure

- `public/`: Static assets including ARNA brand files, icons, and gallery images.
- `src/components/`: Reusable React components including the site navigation, footer, hero, preloader, and premium interactive elements.
- `src/data/`: Centralized content files for events, team, and agenda.
- `src/routes/`: TanStack Router file-based routing architecture.
- `src/styles.css`: Global styles, layout utilities, and animation CSS.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build the project for production
npm run build

# Preview the production build
npm run preview

# Lint the codebase
npm run lint

# Format the code
npm run format
```

## Adding Content

- **Events:** Edit `src/data/aarna.ts` (or equivalent data file) to add new events.
- **Gallery Images:** Place new images in `public/` (e.g., `public/gallery/`) and add references in the data files or gallery components.
- **Brand Assets:** The official brand assets are `public/icons/arna-logo-white.svg` and `public/icons/arna-mark.svg`. Update these files if the brand changes.
hello 