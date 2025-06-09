<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24 overflow-hidden"
    style="background-image: url('@/assets/images/beach-bg.jpg');"
  >
    <!-- Semi-transparent overlay -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <!-- Motion-wrapped content -->
    <Motion
      as="div"
      class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
      v-motion-inview="{ once: true, margin: '-20% 0px' }"
    >
      <!-- Left image -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          src="@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg"
          alt="Interior"
          class="rounded-md shadow-lg"
        />
      </div>

      <!-- Right text -->
      <div class="w-full md:w-1/2 space-y-4 text-white text-center md:text-left">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold">
          Professional Holiday Property Management<br/>
          in Cape Town’s Coastal Hub Bloubergstrand
        </h1>
        <p class="text-lg text-gray-200">
          Expert Maintenance, Cleaning and Guest Coordination
        </p>
        <p class="text-md text-gray-300">
          At Blouberg Coastal Escapes, we offer 20+ years of holiday property management expertise.
        </p>
        <p class="text-md text-gray-300">
          From maximizing rental income to seamless guest support and upkeep—we handle it all.
        </p>
      </div>
    </Motion>
  </section>
</template>

<script setup>
// no imports needed here—<Motion> is global once the plugin is registered
</script>

<style scoped>
/* no extra CSS required */
</style>
