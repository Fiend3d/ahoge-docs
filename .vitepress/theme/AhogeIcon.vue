<script setup lang="ts">
import { brandIcons, type BrandIconName } from './brand-icons'

defineProps<{ name: BrandIconName }>()
</script>

<template>
  <!-- The SVGs are sized in em, so font-size on .ahoge-icon (or on the parent) sets the icon size. -->
  <span class="ahoge-icon" aria-hidden="true" v-html="brandIcons[name]"></span>
</template>
