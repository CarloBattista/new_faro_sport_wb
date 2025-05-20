<template>
    <div class="relative z-10 w-full h-screen bg-black">
        <div class="absolute z-[5] top-0 left-0 w-full h-full lg:px-[90px] px-[32px] flex items-center">
            <h2 class="text-white lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold break-all">
                <p v-if="home">Sport.<br>Passione.<br>Divertimento.</p>
                <p v-else>New Faro Sport</p>
            </h2>
        </div>
        <div class="hero-bg relative z-[2] w-full h-full">
            <img src="https://www.juvenews.eu/wp-content/uploads/202207/a75a348e8f837cd4e19cd0ec0a0f3b16-scaled.jpg" alt="hero bg" class="w-full h-full object-cover">
        </div>
        <div class="absolute z-[7] bottom-5 left-0 w-full flex items-center justify-center">
            <div class="scroll-down h-11 aspect-square flex items-center justify-center" :class="{ animate: isAnimating }">
                <ArrowDown size="32" color="#fff" />
            </div>
        </div>
    </div>
</template>

<script>
// ICONS
import { ArrowDown } from "lucide-vue-next"

export default {
    name: "hero",
    components: {
        // ICONS
        ArrowDown
    },
    props: {
        home: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isAnimating: false
        }
    },
    mounted() {
        this.startAnimationTimer()
    },
    beforeUnmount() {
        if (this.animationTimer) {
            clearInterval(this.animationTimer)
        }
    },
    methods: {
        startAnimationTimer() {
            this.animationTimer = setInterval(() => {
                this.isAnimating = true
                setTimeout(() => {
                    this.isAnimating = false
                }, 1000)
            }, 10000)
        }
    }
}
</script>

<style scoped>
.hero-bg::before {
    position: absolute;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .6;
}

.scroll-down {
    transition: transform 0.5s ease;
}

.scroll-down.animate {
    transform: translateY(10px);
}
</style>