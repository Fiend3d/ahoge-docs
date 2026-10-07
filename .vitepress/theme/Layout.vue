<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AhogeLightbox from './AhogeLightbox.vue'
import AhogeVideoPlayer from './AhogeVideoPlayer.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <AhogeVideoPlayer />
      <AhogeLightbox />
    </template>
  </Layout>
</template>
