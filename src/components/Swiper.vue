<template>
  <swiper
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ type: 'fraction', el: '.pagination' }"
    :modules="modules"
  >
    <swiper-slide v-for="item in items" :key="item.image">
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start lt-sm:px-4">
              <p class="lt-sm:text-xl text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div
      class="flex justify-center items-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-40 h-12 z-30"
    >
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin" style="font-size: 2rem"></div>
      <div class="next i-mdi-arrow-right-thin" style="font-size: 2rem"></div>
    </div>
  </swiper>
</template>
<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper/types'
import type { SwiperItemType } from './types'
import { Navigation, Pagination } from 'swiper'
import type { PropType } from 'vue'

const props = defineProps({
  height: {
    type: String,
    default: 'h-80'
  },
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => []
  }
})
function getClassAndStyle(str: string) {
  // props.height
  // 如果height的值包含rem,em,px，则返回 {string: str, class: ''}
  // 如果height的值包含h-，则返回 {string: '', class: str}
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  }
}
const modules = [Navigation, Pagination]
const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>
<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba(0, 0, 0, 0.3);
}
</style>
