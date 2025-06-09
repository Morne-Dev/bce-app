<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24 overflow-hidden"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <!-- Animate this block on mount & when scrolled into view -->
    <Motion
      as="div"
      ref="contentRef"
      class="relative z-10 w-full flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto gap-10"
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
      v-motion-inview="{ once: true, margin: '-20% 0px' }"
    >
      <!-- Left image -->
      <div class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          :src="interiorImage"
          alt="Interior"
          class="max-w-full h-auto rounded-md shadow-lg"
        />
      </div>

      <!-- Right content -->
      <div class="w-full md:w-1/2 text-white max-w-2xl mx-auto text-center md:text-left space-y-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
          Professional Holiday Property Management in<br />
          Cape Town’s Coastal Hub Bloubergstrand
        </h1>
        <p class="text-lg text-gray-200 font-medium">
          Expert Maintenance, Cleaning and Guest Coordination
        </p>
        <p class="text-md text-gray-300">
          Owning a property is a valuable investment, but managing it can be challenging without the right support.
        </p>
        <p class="text-md text-gray-300">
          At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
        </p>
        <p class="text-md text-gray-300">
          From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it all, so your property stays in top condition year-round.
        </p>
      </div>
    </Motion>
  </section>
</template>

<script setup>
import { Motion } from '@vueuse/motion'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
</script>

<style scoped>
/* nothing needed here */
</style>
