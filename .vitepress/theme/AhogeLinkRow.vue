<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

// items="Label|/path, Label|https://external.tld" — internal paths go through withBase() so the
// row still works when the site is served from a sub-path (GitHub Pages).
const props = defineProps<{ items: string }>()

const links = computed(() =>
  props.items
    .split(',')
    .map((item) => item.split('|').map((part) => part.trim()))
    .filter(([text, href]) => text && href)
    .map(([text, href]) => ({
      text,
      href,
      external: /^https?:|^mailto:/.test(href)
    }))
)
</script>

<template>
  <div class="ahoge-link-row">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.external ? link.href : withBase(link.href)"
      :target="link.external ? '_blank' : undefined"
      :rel="link.external ? 'noopener' : undefined"
    >{{ link.text }}</a>
  </div>
</template>
