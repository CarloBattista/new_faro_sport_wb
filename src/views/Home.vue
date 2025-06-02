<template>
    <navbar />
    <main class="relative z-[1] w-full">
        <hero :home="true" text="" heroImage="/_resources/images/image_01.webp" />
        <section id="gallerySection" class="w-full py-10 lg:px-[90px] px-8 flex flex-col gap-4 items-center justify-center">
            <div class="w-full text-center flex items-center justify-start">
                <h3 class="text-black text-2xl font-bold">Galleria</h3>
            </div>
            <div class="w-full h-[450px] lg:max-h-[450px] grid lg:grid-cols-2 grid-cols-1 gap-2.5">
                <div class="card-image cr-image-one w-full h-full rounded-l-none lg:rounded-l-2xl rounded-tl-2xl lg:rounded-tr-none rounded-tr-2xl" @click="openGallery(0)"></div>
                <div class="relative w-full h-full grid grid-cols-2 gap-2.5">
                    <div class="card-image cr-image-two w-full h-full lg:rounded-bl-none rounded-bl-2xl" @click="openGallery(1)"></div>
                    <div class="card-image cr-image-three w-full h-full lg:rounded-tr-2xl rounded-tr-none lg:rounded-br-none rounded-br-2xl" @click="openGallery(2)"></div>
                    <div class="card-image cr-image-four w-full h-full lg:block hidden" @click="openGallery(6)"></div>
                    <div class="card-image cr-image-five w-full h-full lg:block hidden rounded-br-2xl" @click="openGallery(8)"></div>
                    <div class="absolute bottom-2.5 right-2.5">
                        <button-pr :hasIcon="false" :size="store.isMobile ? 'min' : 'default'" type="secondary" label="Mostra tutte le foto" :disabled="false" @click="openGallery(0)" />
                    </div>
                </div>
            </div>
        </section>
        <structureSection />
        <map-section />
        <section id="directionSection" class="w-full py-10 flex flex-col gap-[50px] items-center justify-center">
            <div class="w-full px-4 text-center flex items-center justify-center">
                <h3 class="text-black text-2xl font-bold">Indicazioni</h3>
            </div>
            <div class="w-full flex items-center justify-center flex-wrap gap-y-[50px]">
                <card-info title="Come arrivare">
                    <template #icon>
                        <MapPinned size="36" stroke-width="1.5" />
                    </template>
                    <template #cta>
                        <a target="_blank" href="https://maps.google.com/maps/dir//Via+Anello+di+San+Cataldo+74122+Taranto+TA/@40.4135818,17.2062347,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x13471c7b21b0b265:0x24e5bbfd4ce52ac3">
                            <button-pr :hasIcon="false" type="outline-primary" label="Indicazioni stradali" :disabled="false" />
                        </a>
                    </template>
                </card-info>
                <card-info title="Parcheggi">
                    <template #icon>
                        <CircleParking size="36" stroke-width="1.5" />
                    </template>
                    <template #cta>
                        <button-pr style="cursor: default; pointer-events: none;" :hasIcon="false" type="inline-text" label="Dispnibili" :disabled="false" />
                    </template>
                </card-info>
                <card-info title="Aiuto">
                    <template #icon>
                        <LifeBuoy size="36" stroke-width="1.5" />
                    </template>
                    <template #cta>
                        <RouterLink to="/contacts">
                            <button-pr :hasIcon="false" type="outline-primary" label="Clicca qui" :disabled="false" />
                        </RouterLink>
                    </template>
                </card-info>
            </div>
        </section>
    </main>
    <contentInfo />
</template>

<script>
import { store } from "../data/store";

import navbar from "../components/global/navbar.vue"
import hero from "../components/global/hero.vue"
import mapSection from "../components/section/map-section.vue"
import cardInfo from "../components/card/card-info.vue"
import buttonPr from '../components/button/button-pr.vue';
import structureSection from '../components/section/structure-section.vue';
import contentInfo from '../components/global/content-info.vue';

// ICONS
import { MapPinned, CircleParking, LifeBuoy } from 'lucide-vue-next';

export default {
    name: "Home",
    components: {
        navbar,
        hero,
        mapSection,
        cardInfo,
        buttonPr,
        structureSection,
        contentInfo,

        // ICONS
        MapPinned,
        CircleParking,
        LifeBuoy
    },
    data() {
        return {
            store
        }
    },
    methods: {
        openGallery(index) {
            store.isGalleryOpen = true;
            store.galleryIndex = index;
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
.card-image {
    position: relative;
    background-color: #f5f5f5;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    cursor: pointer;
}

.card-image::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .15);
    opacity: 0;
    transition: opacity 300ms ease;
}

.card-image:hover::before {
    opacity: 1;
}

.cr-image-one {
    background-image: url('/_resources/images/image_01.webp');
}

.cr-image-two {
    background-image: url('/_resources/images/image_02.webp');
}

.cr-image-three {
    background-image: url('/_resources/images/image_03.webp');
}

.cr-image-four {
    background-image: url('/_resources/images/image_07.webp');
}

.cr-image-five {
    background-image: url('/_resources/images/image_09.webp');
}
</style>