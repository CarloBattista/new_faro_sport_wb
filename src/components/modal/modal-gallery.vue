<template>
    <div class="fixed z-[99999] top-0 left-0 w-full min-h-screen bg-white">
        <div class="relative z-20 w-full h-[60px] max-h-[60px] px-8 flex items-center justify-between bg-white">
            <button-pr :hasIcon="false" size="min" type="primary" label="Indietro" :disabled="false" @click="closeGallery">
                <template #icon>
                    <ChevronLeft size="20" />
                </template>
            </button-pr>
        </div>
        <div class="relative z-10 w-full h-full max-h-screen"></div>
    </div>
</template>

<script>
import buttonPr from '../button/button-pr.vue';

// ICONS
import { ChevronLeft } from 'lucide-vue-next';

export default {
    name: "modal-gallery",
    components: {
        buttonPr,

        // ICONS
        ChevronLeft
    }
}
</script>

<style scoped></style>