<template>
    <div class="relative w-full lg:h-[650px] h-[350px] aspect-video overflow-hidden">
        <div id="canvas-for-googlemap" class="w-full h-full" frameborder="0">
            <iframe title="Google Maps New Faro Sport" class="w-full h-full" :src="BASE_URL+'?q='+PLACE+'&key='+KEY"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "map-section",
    data() {
        return {
            BASE_URL: "https://www.google.com/maps/embed/v1/place",
            KEY: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
            PLACE: "via anello di san cataldo, 74122 taranto ta" // Via+Anello+di+San+Cataldo,+74122+Taranto+TA
        }
    }
}
</script>

<style scoped></style>