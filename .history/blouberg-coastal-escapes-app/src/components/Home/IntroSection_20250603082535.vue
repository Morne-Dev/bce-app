<template>
  <section
    class="min-h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-start px-4 sm:px-8 pt-[10vh] pb-20 overflow-hidden"
    style="background-image: url('/assets/images/your-bg.jpg');"
  >
    <!-- Top dark overlay -->
    <div class="absolute inset-0 bg-black/40 z-0"></div>

    <!-- Bottom gradient (dark ➔ transparent downward) -->
    <div
      class="absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent z-0"
    ></div>

    <!-- Content -->
    <div class="relative z-10 text-center text-white w-full max-w-4xl">
      <img
        v-if="logoUrl"
        :src="logoUrl"
        alt="Logo"
        class="mx-auto mb-10 max-h-[60vh] object-contain"
      />
      <p
        class="text-[35px] tracking-wide drop-shadow-md"
        style="font-family: 'Cormorant Garamond', serif;"
      >
        Helping you find the right fit, every time
      </p>
    </div>
  </section>
</template>



<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'

const introSection = ref(null)
// … keep your IntersectionObserver logic if you still want scroll animation …
</script>

<style scoped>
.intro-section {
  /* keep or remove animation styles as you prefer */
}
</style>


