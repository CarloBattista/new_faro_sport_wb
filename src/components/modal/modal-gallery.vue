<template>
  <div class="fixed z-[99999] top-0 left-0 w-full h-svh bg-white">
    <div class="relative z-20 top-0 left-0 w-full h-[60px] max-h-[60px] px-8 flex items-center justify-between bg-white">
      <button-pr :hasIcon="false" size="min" type="primary" label="Indietro" :disabled="false" @click="closeGallery">
        <template #icon>
          <ChevronLeft size="20" />
        </template>
      </button-pr>
    </div>
    <div class="fixed z-10 top-0 left-0 w-full h-full">
      <div class="w-full h-full">
        <Splide :options="options" aria-label="Gallery images">
          <SplideSlide v-for="(image, imageIndex) in store.images" :key="imageIndex">
            <img
              class="w-full h-full object-contain"
              :src="`/_resources/images/${image.src}`"
              :alt="`/_resources/images/${image.alt}`"
              loading="lazy"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../data/store';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import buttonPr from '../button/button-pr.vue';

import '../../style/gallery.css';

// ICONS
import { ChevronLeft } from 'lucide-vue-next';

export default {
  name: 'modal-gallery',
  components: {
    Splide,
    SplideSlide,
    buttonPr,

    // ICONS
    ChevronLeft,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    closeGallery() {
      store.isGalleryOpen = false;
      store.galleryIndex = 0;
    },
  },
  setup() {
    const options = {
      start: store.galleryIndex,
      perPage: 1,
      perMove: 1,
      rewind: false,
      pagination: true,
      arrows: true,
      type: 'loop',
      gap: '1rem',
      breakpoints: {
        768: {
          arrows: false,
        },
      },
    };

    return { options };
  },
};
</script>

<style scoped></style>
