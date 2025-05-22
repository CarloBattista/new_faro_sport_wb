<template>
  <Analytics />
  <SpeedInsights />
  <div>
    <popup v-if="false" />
    <RouterView v-if="!store.isGalleryOpen" />
    <Transition name="slide-fade">
        <modalGallery v-if="store.isGalleryOpen" />
    </Transition>
  </div>
</template>

<script>
import { Analytics } from "@vercel/analytics/vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";

import { store } from "./data/store";

import popup from "./components/popup/popup.vue";
import modalGallery from './components/modal/modal-gallery.vue';

export default {
  name: "App",
  components: {
    Analytics,
    SpeedInsights,
    popup,
    modalGallery
  },
  data() {
    return {
      store
    }
  },
  methods: {
    checkIsMobile() {
      if (window.innerWidth < 1024) {
        this.store.isMobile = true;
      } else {
        this.store.isMobile = false;
      }
    }
  },
  mounted() {
    this.checkIsMobile();

    window.addEventListener('resize', this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
  },
  watch: {
    'store.isGalleryOpen': {
      handler(value) {
        if (value) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition-property: transform, opacity;
  transition-duration: 200ms;
  transition-timing-function: ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>