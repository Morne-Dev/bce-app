<template>
  <section
    v-motion="section"
    class="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center px-4 sm:px-8 pt-[10vh] pb-20"
    style="background-image: url('/assets/images/your-bg.jpg');"
  >
    <!-- Dark overlay -->
    <div v-motion="overlay" class="absolute inset-0 bg-black/40"></div>

    <!-- Logo & Slogan -->
    <div v-motion="content" class="relative z-10 text-center text-white max-w-4xl space-y-6">
      <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="mx-auto mb-6 object-contain max-h-[50vh]" />
      <p class="text-3xl sm:text-4xl font-serif drop-shadow-md">
        Helping you find the right fit, every time
      </p>
    </div>
  </section>
</template>

<script setup>
import logoUrl from '@/assets/images/logo/Blouberg-Coastal-Escapes-Hero-Logo.png'
import { useSectionMotion } from '@/composables/useSectionMotion'

const { section, overlay, content } = useSectionMotion({
  initialSection:  { opacity: 0.8 },
  initialOverlay:  { opacity: 0.5 },
  initialContent:  { opacity: 0, y: 30 },
  threshold: 0      // trigger immediately on load
})
</script>
