<template>
  <div class="popup-container fixed z-[99999] bottom-8 left-0 w-full px-[16px]">
    <div class="popup relative w-full max-w-[540px] h-[60px] mx-auto rounded-2xl overflow-hidden bg-white shadow-xl shadow-black/20">
      <lottie-player class="lottie lt-start" src="/_resources/json/star.json" background="transparent" speed="1" autoplay></lottie-player>
      <lottie-player class="lottie lt-end" src="/_resources/json/star.json" background="transparent" speed="1" autoplay></lottie-player>
      <div class="w-full h-full flex items-center justify-center text-center">
        <p class="text-black text-sm font-semibold">Siamo felici di annunciare che il nuovo Campo a 11 è ufficialmente prenotabile!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
};
</script>

<style scoped>
.lottie {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 50%;
}

.lottie.lt-start {
  left: -10%;
  transform: translateY(-50%);
}

.lottie.lt-end {
  right: -10%;
  transform: translateY(-50%) rotate(180deg);
}

.popup {
  animation: popup-enter 400ms cubic-bezier(0.075, 0.82, 0.165, 1) 1;
}

@keyframes popup-enter {
  0% {
    transform: translateY(calc(100% + 2rem)) rotate(-15deg);
    width: 100px;
  }

  100% {
    transform: translateY(0) rotate(0deg);
    width: 100%;
  }
}
</style>
