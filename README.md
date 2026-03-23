# Sreehari Academic Research Portfolio

This repository contains the source bundle for Sreehari T M's personal portfolio website.

## Project Analysis

- Project type: personal academic and research portfolio
- Primary focus: AI research, teaching, publications, projects, blogging, and contact links
- Stack: React, TypeScript, Vite, Tailwind CSS v4, shadcn/ui-style components, Radix UI
- Design direction: clean, modern, academic, and blog-friendly

## Current Structure

- `app/`: portfolio sections and UI components
- `styles/`: Tailwind and theme styles
- `imports/pasted_text/`: source content used to generate the portfolio copy
- `package.json`, `vite.config.ts`, `postcss.config.mjs`: build configuration

## Important Note

This started as a partial export from Figma Make or a generated Vite project bundle. The missing Vite entry files have been added so the project now builds as a normal Vite app.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Vercel Deployment

This repository is prepared for Vercel static hosting.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

If Vercel does not auto-detect the settings, enter them manually using the values above.

## GitHub Push

```bash
cd ~/Documents/sreehari-academic-research-portfolio
git init
git add .
git commit -m "Initial commit: academic research portfolio"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
