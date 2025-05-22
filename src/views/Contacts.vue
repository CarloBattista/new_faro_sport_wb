<template>
    <navbar />
    <main class="relative z-[1] w-full">
        <hero :home="false" text="Contattaci" heroImage="/_resources/images/image_02.webp" />
        <section class="relative w-full py-[80px] px-8">
            <div class="max-w-[710px] mx-auto">
                <div class="w-full flex flex-col gap-8">
                    <h3 class="text-black text-2xl font-bold">Come possiamo aiutarti?</h3>
                    <p>Se hai bisogno di aiuto contattaci al numero <strong>(+39) 328 433 9795.</strong></p>
                    <a :href="`tel:${store.phone}`">
                        <button-pr class="w-fit min-w-[170px]" :hasIcon="false" type="primary" label="Chiamaci" :disabled="false" />
                    </a>
                </div>
                <div class="w-full mt-8 flex flex-col gap-8">
                    <div class="flex gap-[22px] items-baseline">
                        <h3 class="text-black text-2xl font-bold">Informazioni</h3>
                        <div class="w-full h-[1px] bg-black"></div>
                    </div>
                    <div class="w-full flex flex-col gap-2.5">
                        <p><strong>Lunedì - Domenica:</strong> h24</p>
                        <p><strong>Indirizzo:</strong> Via Anello di San Cataldo, 74122 Taranto TA</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <contentInfo />
</template>

<script>
import { store } from "../data/store";

import navbar from "../components/global/navbar.vue"
import hero from "../components/global/hero.vue"
import buttonPr from '../components/button/button-pr.vue';
import contentInfo from '../components/global/content-info.vue';

export default {
    name: "Contacts",
    components: {
        navbar,
        hero,
        buttonPr,
        contentInfo,
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped></style>