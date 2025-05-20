<template>
    <navbar />
    <main class="relative z-[1] w-full">
        <hero :home="true" text="" heroImage="/_resources/images/image_01.webp" />
        <map-section />
        <section class="w-full py-10 flex flex-col gap-[50px] items-center justify-center">
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
import navbar from "../components/global/navbar.vue"
import hero from "../components/global/hero.vue"
import mapSection from "../components/section/map-section.vue"
import cardInfo from "../components/card/card-info.vue"
import buttonPr from '../components/button/button-pr.vue';
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
        contentInfo,

        // ICONS
        MapPinned,
        CircleParking,
        LifeBuoy
    }
}
</script>

<style scoped></style>