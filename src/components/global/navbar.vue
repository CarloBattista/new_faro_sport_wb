<template>
  <div
    class="navbar fixed z-[500] top-0 left-0 w-full max-h-[80px] lg:h-[80px] h-[55px] lg:px-[32px] px-[16px] flex items-center justify-between"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="relative z-[10] flex lg:px-[16px] gap-[24px] items-center justify-start">
      <RouterLink to="/contacts" name="contacts" aria-label="Contatti" class="navItem lg:text-base text-sm">Contatti</RouterLink>
    </div>
    <div class="absolute z-[5] top-0 left-0 w-full h-full flex items-center justify-center pointer-none:">
      <RouterLink to="/" name="home" aria-label="Home">
        <div class="nfs-logo full w-[170px] h-[44px] pointer-events-auto hidden lg:block"></div>
        <div class="nfs-logo mob h-[32px] aspect-square pointer-events-auto block lg:hidden"></div>
      </RouterLink>
    </div>
    <div class="relative z-[10] flex lg:px-[16px] gap-[24px] items-center justify-end">
      <a :href="`tel:${store.phone}`">
        <button-pr :hasIcon="false" :size="store.isMobile ? 'min' : 'default'" type="primary" label="Prenota" :disabled="false" />
      </a>
    </div>
  </div>
</template>

<script>
import { store } from '../../data/store';

import buttonPr from '../button/button-pr.vue';

export default {
  name: 'navbar',
  components: {
    buttonPr,
  },
  data() {
    return {
      store,

      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 1) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
  mounted() {
    this.handleScroll();

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);

  transition-property: background-color, backdrop-filter;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

.navbar::before {
  position: absolute;
  z-index: -1;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  opacity: 0.7;
}

.navbar.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
}

.navItem {
  color: white;
  font-weight: 500;

  transition: color 300ms ease;
}

.navItem:hover {
  color: rgb(214, 214, 214);
}

.nfs-logo {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.nfs-logo.full {
  background-image: url('/_resources/NewFaroSport-TextLogo-White-RGB.webp');
}

.nfs-logo.mob {
  background-image: url('/_resources/NewFaroSport-Logo-White-RGB.webp');
}
</style>
