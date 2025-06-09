<template>
  <section
    class="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center px-4 sm:px-8"
    style="background-image: url('/assets/images/your-bg.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 z-0"></div>

    <!-- Content -->
    <div
      class="relative z-10 w-full max-w-4xl text-center text-white"
    >
      <!-- Logo -->
      <img
        v-if="logoUrl"
        :src="logoUrl"
        alt="Logo"
        class="mx-auto mb-5 h-[50vh] sm:h-[50vh] object-contain"
      />

      <!-- Slogan -->
      <p class="text-lg sm:text-xl mb-10">
        Empowering Simplicity. Built For Speed.
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#book"
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow transition"
        >
          Book Now
        </a>
        <a
          href="#learn-more"
          class="bg-white/90 backdrop-blur hover:bg-white text-black font-bold py-3 px-6 rounded-lg shadow transition"
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
