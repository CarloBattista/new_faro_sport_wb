<template>
  <button tabindex="0" class="btn w-auto flex items-center justify-center" :class="'color-' + type + ' ' + 'size-' + size" :disabled="disabled">
    <div v-if="hasIcon" class="h-full flex items-center justify-center">
      <slot name="icon"></slot>
    </div>
    <span v-if="label" class="text-base font-semibold">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'button-pr',
  props: {
    hasIcon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'primary',
    },
    label: {
      type: String,
      default: 'Button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  position: relative;
  border-radius: 32px;
  pointer-events: none;

  transition-property: transform, background-color;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

.btn:not(:disabled) {
  cursor: pointer;
  pointer-events: auto;
}

.btn:not(:disabled):focus::before {
  position: absolute;
  content: '';
  pointer-events: none;
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

.btn:active {
  transform: scale(0.96);
}

/* Size */
.btn.size-default {
  height: 44px;
  padding: 10px 1rem;
}

.btn.size-default span {
  font-size: 1rem;
  line-height: calc(1.5 / 1);
}

.btn.size-min {
  height: 36px;
  padding: 6px 12px;
}

.btn.size-min span {
  font-size: 0.75rem;
  line-height: calc(1 / 0.75rem);
}

/* Primary */
.btn.color-primary {
  background-color: #2d60f9;
  color: white;
}

.btn.color-primary:hover {
  background-color: #224ec8;
}

/* Outline Primary */
.btn.color-outline-primary {
  background-color: transparent;
  border: 2px solid #2d60f9;
  color: #2d60f9;
}

.btn.color-outline-primary:hover {
  background-color: rgba(45, 96, 249, 0.1);
  border: 2px solid #2d60f9;
  color: #2d60f9;
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
  color: #2d60f9;
}
</style>
