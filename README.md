# Ahoge documentation

Ahoge is a hair creation plugin for Autodesk Maya. It generates hair from NURBS surfaces, with tools for shaping hairstyles, adjusting strands, rendering and exporting grooms.

**[Read the documentation](https://fiend3d.github.io/ahoge-docs/)**

This repository contains the documentation website, built with [VitePress](https://vitepress.dev/).

## Getting started with Ahoge

- [Installation](https://fiend3d.github.io/ahoge-docs/installation.html) - download and set up the plugin.
- [Quick Start](https://fiend3d.github.io/ahoge-docs/tutorials/quick-start.html) - create and adjust your first hair shape.
- [Video tutorials](https://fiend3d.github.io/ahoge-docs/tutorials/videos.html) - watch the workflow and hairstyle examples.
- [Reference](https://fiend3d.github.io/ahoge-docs/documentation/) - tools, node attributes and scripting commands.

The guides also cover rendering in Arnold, 3Delight and RenderMan for Maya, plus Alembic export to Unreal Engine and Marmoset Toolbag.

## Downloads and updates

Download Ahoge from [Boosty](https://boosty.to/ahoge) or [ArtStation](https://www.artstation.com/ahoge_hair). Choose the build that matches your Maya version. News and updates are posted on Boosty.

You can also find Ahoge on [YouTube](https://www.youtube.com/@ahoge-plugin) and [Instagram](https://www.instagram.com/ahoge_hair).

## Run the documentation locally

Install Node.js and npm, then run these commands from the repository folder:

```sh
npm ci
npm run dev
```

Open the address shown in the terminal, usually `http://localhost:5173/`. The preview updates as you edit the files. Press `Ctrl+C` to stop it.

To build and preview the published version:

```sh
npm run build
npm run preview
```

## Improve the documentation

Found an unclear explanation, a broken link or an incorrect example? [Open an issue](https://github.com/Fiend3d/ahoge-docs/issues) or submit a pull request.

Pages are Markdown files: feature references are in `documentation/`, tutorials are in `tutorials/`, and the homepage is `index.md`. Images are in `public/images/`; site navigation and styling are in `.vitepress/`.

Before submitting changes, run:

```sh
npm run check
```

This builds the site and checks internal links, section links and local assets. Changes pushed to `main` are published automatically through GitHub Pages.
