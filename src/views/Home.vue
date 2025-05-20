<template>
    <navbar />
    <hero :home="true" />
    <mapSection />
</template>

<script>
import navbar from "../components/global/navbar.vue"
import hero from "../components/global/hero.vue"
import mapSection from "../components/section/map-section.vue"

export default {
    name: "Home",
    components: {
        navbar,
        hero,
        mapSection
    }
}
</script>

<style scoped></style>