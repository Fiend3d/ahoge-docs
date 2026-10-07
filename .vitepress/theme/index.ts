import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import AhogeIcon from './AhogeIcon.vue'
import AhogeLinkRow from './AhogeLinkRow.vue'
import './custom.css'

// Dark is the default theme. Runs when the theme module is imported, i.e. before VitePress
// resolves the appearance — in dev and in the build. Only an explicit 'light' choice by the
// visitor is kept; 'auto' (the value VitePress stores for system-following) becomes dark.
const APPEARANCE_KEY = 'vitepress-theme-appearance'
if (typeof localStorage !== 'undefined') {
  try {
    const stored = localStorage.getItem(APPEARANCE_KEY)
    if (stored !== 'light' && stored !== 'dark') localStorage.setItem(APPEARANCE_KEY, 'dark')
  } catch {
    /* private mode / storage disabled */
  }
}

export default {
  extends: DefaultTheme,
  Layout,
  // Registered globally so markdown can use <AhogeIcon name="..." /> and <AhogeLinkRow items="..." />
  // inside plain HTML blocks.
  enhanceApp({ app }) {
    app.component('AhogeIcon', AhogeIcon)
    app.component('AhogeLinkRow', AhogeLinkRow)
  }
} satisfies Theme
