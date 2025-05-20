<template>
    <button tabindex="0" class="btn flex items-center justify-center" :class="'color-'+type" :disabled="disabled">
        <div v-if="hasIcon" class="h-full aspect-square flex items-center justify-center"></div>
        <span v-if="label" class="text-base font-semibold">{{ label }}</span>
    </button>
</template>

<script>
export default {
    name: "button-pr",
    props: {
        hasIcon: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "primary"
        },
        label: {
            type: String,
            default: "Button"
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.btn {
    position: relative;
    padding: 10px 1rem;
    border-radius: 32px;
    pointer-events: none;

    transition-property: background-color;
    transition-duration: 300ms;
    transition-timing-function: ease;
}

.btn:not(:disabled) {
    cursor: pointer;
    pointer-events: auto;
}

.btn:not(:disabled):focus::before {
    position: absolute;
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline-color: white;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
    border-radius: 32px;
}

/* Primary */
.btn.color-primary {
    background-color: #2D60F9;
    color: white;
}

.btn.color-primary:hover {
    background-color: #224EC8;
}

/* Outline Primary */
.btn.color-outline-primary {
    background-color: transparent;
    border: 2px solid #2D60F9;
    color: #2D60F9;
}

.btn.color-outline-primary:hover {
    background-color: rgba(45, 96, 249, .1);
    border: 2px solid #2D60F9;
    color: #2D60F9;
}

/* Secondary */
.btn.color-secondary {
    background-color: #fff;
    color: #000;
}

.btn.color-secondary:hover {
    background-color: #f0f0f0;
}

/* Inline Text */
.btn.color-inline-text {
    background-color: transparent;
    color: #2D60F9;
}

</style>