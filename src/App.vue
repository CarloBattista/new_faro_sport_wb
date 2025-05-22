<template>
  <Analytics />
  <div>
    <RouterView />
  </div>
</template>

<script>
import { Analytics } from "@vercel/analytics/vue";
import { store } from "./data/store";

export default {
  name: "App",
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

<style></style>