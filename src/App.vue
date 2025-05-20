<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
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
  }
}
</script>

<style></style>