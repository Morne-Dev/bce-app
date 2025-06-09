<template>
  <section class="relative w-full min-h-screen flex items-center justify-center px-4 bg-cover bg-center">
  <div class="relative z-10 text-center w-full h-full animate-fadeInUp transition-opacity duration-1000">
    <!-- Logo -->
    <img
      src="/src/assets/images/logo/logo-white.png"
      alt="Logo"
      class="mx-auto mb-5 h-[20vh] object-contain"
    />
    <!-- Slogan -->
    <p class="text-white text-lg sm:text-xl mb-10">
      Empowering Simplicity. Built For Speed.
    </p>
    <!-- Buttons -->
    <div class="flex flex-wrap justify-center gap-4">
      <a href="#book" class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow transition">
        Book Now
      </a>
      <a href="#learn-more" class="bg-white/90 backdrop-blur hover:bg-white text-black font-bold py-3 px-6 rounded-lg shadow transition">
        Learn More
      </a>
    </div>
  </div>
</section>

</template>

<script setup>
import logoUrl from '../../assets/images/logo/logo-white.png'
</script>
