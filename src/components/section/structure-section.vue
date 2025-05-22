<template>
    <section class="relative w-full py-28 lg:px-[90px] px-8 flex lg:flex-row flex-col gap-[50px] items-start bg-black">
        <div class="block-head lg:left-[calc(90px+110px)] left-8 lg:block hidden"></div>
        <div class="relative z-30 w-full max-w-[300px] text-center flex items-center justify-start">
            <h3 class="text-white text-2xl font-bold">Strutture</h3>
        </div>
        <div class="carousel-structures relative z-10 w-full h-full">
            <Splide :options="options" aria-label="Gallery images">
                <SplideSlide v-for="(structure, structureIndex) in store.structures" :key="structureIndex">
                    <cardStructure :data="structure" v-if="structure.visible" />
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { store } from '../../data/store';

import cardStructure from '../card/card-structure.vue';

import "../../style/structures-carousel.css"

export default {
    name: "structure-section",
    components: {
        Splide,
        SplideSlide,

        cardStructure
    },
    data() {
        return {
            store
        }
    },
    setup() {
        const options = {
            perPage: 2,
            perMove: 2,
            rewind: false,
            pagination: false,
            arrows: false,
            gap: '1rem',
            breakpoints: {
                768: {
                    perPage: 1,
                    perMove: 1,
                }
            }
        };

        return { options };
    },
}
</script>

<style scoped>
.block-head {
    position: absolute;
    z-index: 20;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    max-width: 200px;
    background: #000000;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}

.block-head::before {
    position: absolute;
    top: 0;
    left: -100%;
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
}
</style>