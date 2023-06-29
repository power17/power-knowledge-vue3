<template>
  <div class="flex">
    <router-link class="item" to="/">产品</router-link>
    <a to="/" class="item" target="_blank">社区</a>
    <router-link class="item" to="/">学习</router-link>
    <router-link class="item" to="/">关于</router-link>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.item {
  @apply relative text-white text-xl px-8 py-2 font-300 cursor-pointer lt-sm:self-start;
  &:hover {
    @apply font-500;
    &:after {
      content: '';
      @apply absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50%-1rem)];
      // left: calc(50% - 1rem);
    }
  }
}
</style>
