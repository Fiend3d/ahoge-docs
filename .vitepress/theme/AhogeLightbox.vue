<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

// Click any gallery/figure image to open it full size. Arrow keys (and the on-screen
// arrows) walk through the images of the current page, Esc or a click on the backdrop closes.
const SELECTOR = '.ahoge-grid img, .ahoge-figure img'

const items = ref<{ src: string; alt: string }[]>([])
const index = ref(-1)
const open = computed(() => index.value >= 0)

const current = computed(() => items.value[index.value])

function collect() {
  items.value = Array.from(document.querySelectorAll<HTMLImageElement>(SELECTOR)).map((img) => ({
    src: img.currentSrc || img.src,
    alt: img.alt || ''
  }))
}

function show(i: number) {
  const n = items.value.length
  if (!n) return
  index.value = (i + n) % n
}

function onImageClick(e: MouseEvent) {
  const el = e.target
  if (!(el instanceof HTMLImageElement) || !el.matches(SELECTOR)) return
  collect()
  show(Array.from(document.querySelectorAll<HTMLImageElement>(SELECTOR)).indexOf(el))
}

function onKey(e: KeyboardEvent) {
  if (!open.value) return
  if (e.key === 'Escape') index.value = -1
  else if (e.key === 'ArrowRight') show(index.value + 1)
  else if (e.key === 'ArrowLeft') show(index.value - 1)
}

onMounted(() => {
  document.addEventListener('click', onImageClick)
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  document.removeEventListener('click', onImageClick)
  window.removeEventListener('keydown', onKey)
  document.body.classList.remove('ahoge-lightbox-open')
})

watch(open, (value) => document.body.classList.toggle('ahoge-lightbox-open', value))
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="ahoge-lightbox" @click="index = -1">
      <img v-if="current" :src="current.src" :alt="current.alt" @click.stop />

      <p v-if="current?.alt" class="ahoge-lightbox-caption">{{ current.alt }}</p>

      <button
        v-if="items.length > 1"
        class="ahoge-lightbox-nav prev"
        type="button"
        aria-label="Previous image"
        @click.stop="show(index - 1)"
      >
        ‹
      </button>
      <button
        v-if="items.length > 1"
        class="ahoge-lightbox-nav next"
        type="button"
        aria-label="Next image"
        @click.stop="show(index + 1)"
      >
        ›
      </button>

      <button class="ahoge-lightbox-close" type="button" aria-label="Close" @click.stop="index = -1">
        ×
      </button>
    </div>
  </Teleport>
</template>
