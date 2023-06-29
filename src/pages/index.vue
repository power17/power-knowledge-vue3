<template>
  <Swiper height="36rem" :items="items">
    <template v-slot="data">
      <div>
        gnosadgjosaj
        {{ data.item }}
      </div>
    </template>
  </Swiper>
</template>
<script setup lang="ts">
import type { SwiperItemType } from '../components/types'
import bg from '@/assets/images/bg.png'
const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg
  },
  {
    image: bg
  },
  {
    image: bg
  },
  {
    image: bg
  }
]
</script>
<route lang="yaml">
meta:
  layout: default
</route>
