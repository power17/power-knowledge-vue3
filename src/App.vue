<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { useThemeStroe } from './store/useThemeStore'
// const themeStore = useThemeStroe()
// useResizeObserver(document.body, () => {
//   const width = window.innerWidth
//   const contentWidth = 1200
//   themeStore.$patch({
//     state: width < 1200 ? +(width / contentWidth).toFixed(2) : 1
//   })
// })
</script>

<style scoped></style>
