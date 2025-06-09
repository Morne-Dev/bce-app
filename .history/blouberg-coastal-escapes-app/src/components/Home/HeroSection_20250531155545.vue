<template>
  <section
    class="relative h-screen bg-cover bg-center"
    style="background-image: url('/assets/images/hero-bg.jpg');"
  >

    <!-- Hero Logo-->
    <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
      <img :src="logoUrl" alt="Logo" class="h-450 w-auto" />
    </div>
  
    
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
    >
      <h1 class="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
        Blouberg Coastal Escapes
      </h1>
      <p class="text-white text-lg md:text-2xl mb-8 max-w-2xl">
        Discover luxury holiday homes in Cape Town's spectacular coastal hub.
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="#book"
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          Book Now
        </a>
        <a
          href="#learn-more"
          class="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg shadow transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>


<script setup>
import logoUrl from '../../assets/images/logo/logo-white.png'
</script>
