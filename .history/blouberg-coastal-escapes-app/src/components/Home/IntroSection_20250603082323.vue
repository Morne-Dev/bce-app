<template>
  <section
    ref="introSection"
    class="intro-section relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <!-- ▶️ Removed gradient overlay -->

    <!-- Top Content -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- … your existing content … -->
    </div>

    <!-- Features Section -->
    <div class="relative z-10 mt-16 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-center">
      <!-- … your feature items … -->
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


