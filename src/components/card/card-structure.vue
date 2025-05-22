<template>
    <div class="relative w-full max-w-[380px] bg-black" :class="{ 'pointer-events-none opacity-50': data?.coming_soon }" style="aspect-ratio: 380 / 580;">
        <div class="relative z-10 w-full h-full">
            <div class="absolute linear-vignette z-[3] top-0 left-0 w-full h-full opacity-70"></div>
            <div class="absolute block-vignette z-[2] top-0 left-0 w-full h-full bg-black/20"></div>
            <img :src="`/_resources/images/${data?.hero_image}`" :alt="data?.title" class="w-full h-full object-cover" loading="lazy" fetchpriority="high">
        </div>
        <div class="absolute z-20 top-0 left-0 w-full h-full px-6">
            <div class="w-full h-full flex flex-col gap-11 justify-center">
                <div class="flex flex-col gap-1">
                    <h2 class="text-white text-3xl font-bold uppercase">{{ data?.title }}</h2>
                    <p class="text-white text-base font-normal break-all">{{ data?.description }}</p>
                </div>
                <a :href="`tel:${store.phone}`">
                    <button-pr class="w-fit min-w-[170px]" :hasIcon="false" size="default" type="primary" :label="data?.coming_soon ? 'In arrivo' : 'Prenota ora'" :disabled="data?.coming_soon" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../../data/store";

import buttonPr from '../button/button-pr.vue';

export default {
    name: "card-structure",
    components: {
        buttonPr
    },
    props: {
        data: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style scoped>
.linear-vignette {
    background: #000000;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}
</style>