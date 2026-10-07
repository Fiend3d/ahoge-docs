# Ahoge documentation

Documentation site for **Ahoge**, a hair creation plugin for Autodesk Maya.
Built with [VitePress](https://vitepress.dev/).

Official links: [Boosty](https://boosty.to/ahoge) · [wiki](https://ahoge.wiki.gd/) ·
[YouTube](https://www.youtube.com/@ahoge-plugin) · [ArtStation](https://www.artstation.com/ahoge_hair) ·
[Instagram](https://www.instagram.com/ahoge_hair)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build / preview

```bash
npm run build    # output: .vitepress/dist
npm run preview
npm run check    # build + verify internal links and images
```

## Deploy to GitHub Pages

Ahoge is a commercial project, so the source stays **private** — the repository is private and only the
built site is published, by `.github/workflows/deploy.yml` (build with `GITHUB_PAGES=true`, then
`upload-pages-artifact` / `deploy-pages`).

1. Push to the `main` branch — the workflow runs on every push to `main` and on `workflow_dispatch`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**. Serving a Pages site from a private
   repository needs a plan that includes it (Pro / Team / Enterprise); on a free account the repository
   has to be public.
3. `REPO` in `.vitepress/config.mts` must equal the repository name: it sets the site `base`, so the
   workflow builds with the correct `/ahoge-docs/` path and the site is served at
   `https://<owner>.github.io/ahoge-docs/`.

For a custom domain, set `base` in `.vitepress/config.mts` to `/`.

## Structure

```
.vitepress/config.mts     site config, nav, sidebars
.vitepress/theme/         theme + custom CSS
  index.ts                extends DefaultTheme, swaps in Layout.vue, registers <AhogeIcon /> and <AhogeLinkRow /> globally
  Layout.vue              default layout + <AhogeVideoPlayer /> and <AhogeLightbox /> in the layout-bottom slot
  AhogeLightbox.vue       click-to-zoom viewer for .ahoge-grid / .ahoge-figure images
  AhogeVideoPlayer.vue    click-to-play YouTube embeds for .ahoge-video-thumb buttons
  AhogeIcon.vue           inline brand icon used by the link cards and site chips
  AhogeLinkRow.vue        row of pill links (internal paths go through withBase)
  brand-icons.ts          the .svg files imported with ?raw, keyed by name
  custom.css              brand colours, grids, link cards, site chips, lightbox and video styles
public/                   logo, favicon, images
public/icons/             brand icons (nav bar + pages)
index.md                  home page
installation.md           install guide
documentation/            feature documentation
  documentation/nodes/    ahogeShape / nurbopusNode / swirlNode attribute references
  documentation/commands/ ahogeCmd, run-time commands, context commands
  documentation/tools/    Curve Brush, Surface Brush, Carousel
tutorials/                step-by-step tutorials
links.md                  official links
scripts/check-links.cjs   build verification
```

## Brand icons and link blocks

`public/icons/` holds one monochrome SVG per service. They are `fill="currentColor"` and sized in `em`,
so the same glyph is used in the nav bar (`socialLinks`) and on the pages, and it follows the light/dark
colours automatically:

| Icon | File | Source |
|---|---|---|
| Ahoge | `ahoge.svg` | the Ahoge logo — `ahoge_logo.svg` from the plug-in source, re-exported for the web |
| Boosty | `boosty.svg` | simple-icons |
| YouTube | `youtube.svg` | simple-icons |
| ArtStation | `artstation.svg` | simple-icons |
| Instagram | `instagram.svg` | simple-icons |

`ahoge.svg` is the logo itself, not a stand-in: the strand outline (`stroke="currentColor"`), the tail
(`fill="currentColor"`) and the highlight (`currentColor` at 45%) are the three shapes of
`ahoge_logo.svg`, with the Inkscape group transforms baked into the path data and the geometry fitted to a
`0 0 24 24` viewBox. The body fill is `currentColor` at 22% so the mark keeps the logo's outlined look in
every theme colour. It labels the **Official wiki** links on the home page and on `/links`.

The nav inlines them at build time with `brandIcon()` in `.vitepress/config.mts`. Pages use the globally
registered `<AhogeIcon name="boosty" />` instead of favicons — no extra requests, no sub-path problems on
GitHub Pages, and nothing blurry at 2× zoom:

```md
<a class="ahoge-link-card" href="https://boosty.to/ahoge" target="_blank" rel="noopener">
  <AhogeIcon class="ahoge-link-icon" name="boosty" />
  <span class="ahoge-link-text">
    <span class="ahoge-link-title">Boosty</span>
    <span class="ahoge-link-desc">Downloads, latest news and updates</span>
    <span class="ahoge-link-url">boosty.to/ahoge</span>
  </span>
</a>
```

`.ahoge-links` is the card grid (used on `/links`), `.ahoge-sites` the compact chip row (home page).
Cards and chips are **not underlined** and keep their own text colours: VitePress styles doc links as
`.vp-doc a` (specificity 0,1,1) and `.vp-doc a:hover` (0,2,1), so any rule that targets one of these
`<a>` elements must be prefixed with `.vp-doc` to win — plain `.ahoge-link-card { text-decoration: none }`
is outranked and the underline stays.
Because a card contains an inline `<svg>`, VitePress' own external-link arrow is skipped there too; the
`AhogeLinkRow` pills are plain text, so external ones get VitePress' standard arrow automatically.

For a row of pill links — internal or external — use `<AhogeLinkRow items="Label|/path, Label|https://…" />`;
internal paths are resolved with `withBase()` so they keep working under the GitHub Pages sub-path.

These are the services' own trademarks, used only to label links to them — replace them if you do not
want to host them.

`npm run check` builds the site and verifies every internal link and every local image/asset
resolves; it auto-detects the site base (`/` locally, `/<repo>/` on GitHub Pages) and exits non-zero
when something is missing.

## Content sources

Feature prose is written from the official wiki at [https://ahoge.wiki.gd/](https://ahoge.wiki.gd/).
The **Nodes**, **MEL commands** and **Tools** pages are written from the installed plug-in instead,
because the wiki does not document them:

| Page group | Read from |
|---|---|
| `documentation/nodes/` | `AEahogeShapeTemplate.mel`, `AEnurbopusNodeTemplate.mel`, `AEswirlNodeTemplate.mel` for rollout order and the exact `-l "Label"` text in the first table column; `type` / `attributeQuery` through `mayapy` for types, defaults, short names and enum options; `mayapy` probes — build a surface, connect it to an `ahogeShape`, change one attribute, measure `outputPoints` / `outputWidths` / `outputColors` — for what each attribute actually does |
| `documentation/commands/` | `ahoge.mll` flag probe (`ahogeCmd -<flag>` with the wrong arity reports how many arguments a flag expects) and the calls in `ahoge_ui.py` / `ahoge_tools.py` for the value strings |
| `documentation/tools/` | `ahogeRunTimeCommands.mel` for the run-time commands, `ahogeTools.mel` for the menu items, `curveBrushProperties.mel` / `surfaceBrushProperties.mel` / `carouselProperties.mel` for control labels and tooltips, `*Values.mel` for the context command flags |

Where this site and the official wiki differ, the wiki and the current Ahoge build are authoritative.
Never state a default or a range that has not been read off the node or the plug-in. No Ahoge attribute
has hard `min` / `max` clamps, so the attribute tables carry no Range column — limits that are only
semantic (a share between 0 and 1) are explained in the text instead.

Images in `public/images/` are taken from the official wiki. Replace or remove them if you do not
have permission to host them.

## Images

Gallery and demo images keep their **natural aspect ratio** (`.ahoge-grid img { height: auto }`) — they
are never cropped to a fixed tile. Any image inside `.ahoge-grid` or `.ahoge-figure` is clickable:
`AhogeLightbox.vue` opens it full size, `←` / `→` walk through the images of the page, `Esc` or a click
on the backdrop closes it. Add new gallery images with the usual `<div class="ahoge-grid">` /
`<figure class="ahoge-figure">` markup and they get the lightbox automatically.

## Videos

`tutorials/videos.md` lists the tutorials from the official YouTube channel. Each card is a **facade**: the
page ships only a YouTube thumbnail (`i.ytimg.com/vi/<id>/hq720.jpg`) inside a `<button class="ahoge-video-thumb"
data-video="<id">>`, and `AhogeVideoPlayer.vue` swaps that button for a `youtube-nocookie.com/embed/<id>`
iframe when it is clicked. The embedded player loads only when someone plays a video; thumbnails load with the page.

Cards are `<div class="ahoge-video">` with a `.ahoge-video-thumb` button and a separate
`.ahoge-video-title` link. Do **not** nest a link inside a link: the HTML parser closes the outer anchor early and
the card layout breaks.

## Theme

The **dark theme is the default** (`themeConfig.appearance: 'dark'`), and a small `head` script seeds
`localStorage['vitepress-theme-appearance'] = 'dark'` before VitePress' own `check-dark-mode` script
runs, so first-time visitors never see a light flash. The light/dark toggle in the nav bar still
works and remembers each visitor's choice. To lock the site to dark, use `appearance: 'force-dark'`
and drop the seeding script.

## Editing

### Terminology

Ahoge grows hair from **geometry**: NURBS source surfaces, or curves via Nurbopus. "Scalp" is an
anatomical region, never a growth source — do not call a mesh a "scalp". Use **head mesh** for the
modelled/sculpted mesh, **source surface** for the NURBS surface hair is created from, and region
names (**crown**, **fringe**, **brow**, **eyelid**, **sideburns**) when a body region is meant.

Markdown files only. Frontmatter is used on the home page; everything else is plain Markdown with a
few `<figure>` / `<div class="ahoge-grid">` blocks for image layouts.

### Code fences

Use `mel` fences for MEL examples. The custom grammar in `.vitepress/mel-language.ts` highlights
commands, flags, variables, strings, comments and backtick expressions in both themes.
Use `python` fences for Python and `bash` only for shell commands. Keep each language in its own block.
