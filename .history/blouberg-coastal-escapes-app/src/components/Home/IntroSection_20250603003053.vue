<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <!-- Animated Content -->
    <motion.div
      class="relative z-10 w-full flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto"
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
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
      <div class="w-full md:w-1/2 text-white max-w-2xl mx-auto text-center md:text-left">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-black leading-tight">
          Professional Holiday Property Management in<br />
          Cape Town’s Coastal Hub Bloubergstrand,
        </h1>
        <p class="mt-4 text-lg text-gray-800 font-medium">
          Expert Maintenance, Cleaning and Guest Coordination
        </p>
        <p class="mt-6 text-md text-gray-700">
          Owning a property is a valuable investment, but managing it can be challenging without the right support.
        </p>
        <p class="mt-4 text-md text-gray-700">
          At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
        </p>
        <p class="mt-4 text-md text-gray-700">
          From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it all,
          so your property stays in top condition year-round.
        </p>
      </div>
    </motion.div>

    <!-- Features Section -->
    <div
      class="relative z-10 mt-16 w-full px-4 md:px-0 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-center"
    >
      <div class="flex-1">
        <div class="text-4xl text-gray-700 mb-2">✔️</div>
        <h3 class="font-semibold italic text-gray-800">Established</h3>
        <p class="text-sm text-gray-600 mt-2">
          As Blouberg locals, we have an in-depth understanding of the holiday market in the area.
        </p>
      </div>
      <div class="flex-1">
        <div class="text-4xl text-purple-800 mb-2">👍</div>
        <h3 class="font-semibold italic text-gray-800">Reviews</h3>
        <p class="text-sm text-gray-600 mt-2">
          Consistently rated above industry standard, our high review score shows our commitment to guest experience.
        </p>
      </div>
      <div class="flex-1">
        <div class="text-4xl text-purple-800 mb-2">📍</div>
        <h3 class="font-semibold italic text-gray-800">Local</h3>
        <p class="text-sm text-gray-600 mt-2">
          Based in Blouberg, we’re proud locals with unmatched expertise in property management services.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
</script>

