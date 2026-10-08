import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { melLanguage } from './mel-language'

// Brand icons served from public/icons/ (inlined so the nav needs no external icon CDN)
const ICONS = fileURLToPath(new URL('../public/icons', import.meta.url))
const brandIcon = (name: string) => ({
  svg: readFileSync(`${ICONS}/${name}.svg`, 'utf-8')
})

const REPO = 'ahoge-docs' // must match the repository name — it becomes the Pages base path
const BASE = process.env.GITHUB_PAGES ? `/${REPO}/` : '/'

export default defineConfig({
  base: BASE,
  srcExclude: ['README.md'],
  lang: 'en-US',
  title: 'Ahoge',
  description:
    'Ahoge is a hair creation plugin for Autodesk Maya. Guides, documentation, tutorials and installation notes.',
  head: [
    // Dark is the default theme. Runs before VitePress resolves the appearance so the page is
    // painted dark on the first load. An explicit 'light' choice by the visitor is respected.
    [
      'script',
      {},
      `try{var k='vitepress-theme-appearance',v=localStorage.getItem(k);if(v!=='light'&&v!=='dark')localStorage.setItem(k,'dark')}catch(e){}`
    ],
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE}favicon.png` }],
    ['meta', { name: 'theme-color', content: '#1976d2' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Ahoge' }],
    ['meta', { property: 'og:image', content: `${BASE}images/wiki.jpg` }]
  ],

  markdown: {
    // Shiki has no MEL grammar, so MEL is registered here as a small custom language
    // (see .vitepress/mel-language.ts) instead of borrowing bash.
    languages: [melLanguage, 'python', 'bash', 'bat', 'ini', 'json', 'yaml', 'ts', 'js']
  },

  vite: {
    server: {
      // VitePress rewrites public/images into .vitepress/.temp while the dev server runs.
      // Chokidar watching those files throws EBUSY (resource busy or locked) on Windows and
      // takes the whole dev server down, so keep the temp dir out of the watcher.
      watch: { ignored: ['**/.vitepress/.temp/**'] }
    }
  },

  themeConfig: {
    // Dark is the default; the toggle still works and remembers the visitor's choice.
    // Use 'force-dark' instead to lock it to dark.
    appearance: 'dark',
    logo: { light: '/ahoge_logo.png', dark: '/ahoge_logo.png' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation' },
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Links', link: '/links' }
    ],

    sidebar: {
      '/documentation/': [
        { text: 'Overview', link: '/documentation/' },
        {
          text: 'Nodes',
          items: [
            { text: 'Node types', link: '/documentation/nodes/' },
            { text: 'ahogeShape attributes', link: '/documentation/nodes/ahoge-shape' },
            { text: 'nurbopusNode attributes', link: '/documentation/nodes/nurbopus-node' },
            { text: 'swirlNode attributes', link: '/documentation/nodes/swirl-node' }
          ]
        },
        {
          text: 'MEL commands',
          items: [
            { text: 'Command list', link: '/documentation/commands/' },
            { text: 'ahogeCmd', link: '/documentation/commands/ahogecmd' },
            { text: 'ahoge and run-time commands', link: '/documentation/commands/ahoge-and-runtime-commands' },
            { text: 'Context commands', link: '/documentation/commands/context-commands' }
          ]
        },
        {
          text: 'Tools',
          items: [
            { text: 'Context tools', link: '/documentation/tools/' },
            { text: 'Curve Brush', link: '/documentation/tools/curve-brush' },
            { text: 'Surface Brush', link: '/documentation/tools/surface-brush' },
            { text: 'Carousel', link: '/documentation/tools/carousel' }
          ]
        },
        {
          text: 'Attributes',
          items: [
            { text: 'Segments and Density', link: '/documentation/segments-and-density' },
            { text: 'Width', link: '/documentation/width' },
            { text: 'Color', link: '/documentation/color' },
            { text: 'Noise', link: '/documentation/noise' },
            { text: 'Spray', link: '/documentation/spray' },
            { text: 'Multistrand', link: '/documentation/multistrand' },
            { text: 'Clump', link: '/documentation/clump' },
            { text: 'Viewport', link: '/documentation/viewport' }
          ]
        },
        {
          text: 'Workflow',
          items: [
            { text: 'Create Ahoge hair', link: '/documentation/create' },
            { text: 'Connect / Disconnect', link: '/documentation/connect-disconnect' },
            { text: 'Duplicate', link: '/documentation/duplicate' },
            { text: 'Select', link: '/documentation/select' },
            { text: 'Convert to Mesh', link: '/documentation/convert' },
            { text: 'Nurbopus', link: '/documentation/nurbopus' },
            { text: 'Swirl', link: '/documentation/swirl' },
            { text: 'Surface Rig', link: '/documentation/surface-rig' },
            { text: 'Misc tools', link: '/documentation/misc' }
          ]
        },
        {
          text: 'Export and rendering',
          items: [
            { text: 'Alembic export', link: '/documentation/alembic' },
            { text: 'Unreal Engine export', link: '/documentation/unreal' },
            { text: 'Marmoset Toolbag export', link: '/documentation/marmoset' },
            { text: 'Arnold', link: '/documentation/arnold' },
            { text: 'Renderers (3Delight, RenderMan)', link: '/documentation/renderers' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Tutorials',
          items: [
            { text: 'Overview', link: '/tutorials/' },
            { text: 'Quick Start', link: '/tutorials/quick-start' },
            { text: 'Video tutorials', link: '/tutorials/videos' },
            { text: 'XGen guides for Nurbopus', link: '/tutorials/xgen-guides' },
            { text: 'Export to Unreal Engine', link: '/documentation/unreal' },
            { text: 'Set up for dynamic nHair', link: '/tutorials/dynamic-nhair' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: brandIcon('boosty'), link: 'https://boosty.to/ahoge', ariaLabel: 'Boosty' },
      { icon: brandIcon('artstation'), link: 'https://www.artstation.com/ahoge_hair', ariaLabel: 'ArtStation' },
      { icon: brandIcon('youtube'), link: 'https://www.youtube.com/@ahoge-plugin', ariaLabel: 'YouTube' },
      { icon: brandIcon('instagram'), link: 'https://www.instagram.com/ahoge_hair', ariaLabel: 'Instagram' }
    ],

    outline: { level: [2, 3] },
    lastUpdated: true,
    cleanUrls: true,

    footer: {
      message: 'Ahoge — hair creation plugin for Autodesk Maya.'
      // No licence claim here on purpose. Add e.g.
      // copyright: 'Docs © Ahoge, all rights reserved.'
      // once you have decided what the documentation is under.
    },

    search: { provider: 'local' }
  }
})
