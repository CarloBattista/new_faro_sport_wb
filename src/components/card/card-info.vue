<template>
    <div class="w-full max-w-[300px] h-[215px] flex flex-col gap-[20px] items-center justify-center">
        <h2 class="text-[#5E5E5E] text-2xl font-normal text-center">{{ title }}</h2>
        <div class="relative w-24 aspect-square rounded-full flex items-center justify-center border border-dashed border-[#DEDEDE]">
            <slot name="icon"></slot>
        </div>
        <div class="w-full flex items-center justify-center">
            <slot name="cta"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "card-info",
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped></style>