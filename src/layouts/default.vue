<template>
  <div
    class="fixed top-0 w-full bg-black bg-opacity-30 z-1000"
    :class="{ 'bg-black bg-opacity-50 shadow-lg': y > 0 }"
  >
    <Container>
      <img class="w-14 h-full" src="/512x512.png " alt="logo" />
      <Menu></Menu>
    </Container>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
const { y } = useWindowScroll()
</script>
