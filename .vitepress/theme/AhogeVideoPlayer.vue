<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// Click-to-play facades: the page ships only YouTube thumbnails, and the YouTube player is
// created when a thumbnail is clicked. Keeps the page light and avoids third-party cookies
// until someone actually plays a video. Delegation on document means it also works after
// client-side navigation to a page that contains videos.
function onThumbClick(e: MouseEvent) {
  const thumb = (e.target as HTMLElement)?.closest?.('.ahoge-video-thumb') as HTMLElement | null
  const id = thumb?.dataset.video
  if (!thumb || !id) return

  const frame = document.createElement('iframe')
  frame.className = 'ahoge-video-frame'
  frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
  frame.title = thumb.dataset.title || 'Ahoge video'
  frame.loading = 'lazy'
  frame.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  frame.setAttribute('allowfullscreen', '')
  thumb.replaceWith(frame)
  frame.focus()
}

onMounted(() => document.addEventListener('click', onThumbClick))
onUnmounted(() => document.removeEventListener('click', onThumbClick))
</script>

<template>
  <span hidden aria-hidden="true"></span>
</template>
