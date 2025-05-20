<template>
    <navbar />
    <hero :home="true" />
</template>

<script>
import navbar from "../components/global/navbar.vue"
import hero from "../components/global/hero.vue"

export default {
    name: "Home",
    components: {
        navbar,
        hero
    }
}
</script>

<style scoped></style>