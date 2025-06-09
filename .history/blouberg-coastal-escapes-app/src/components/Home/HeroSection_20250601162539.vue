<template>
  <section class="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 bg-cover bg-center" style="background-image: url('/assets/images/your-bg.jpg');">
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-3xl">
      <!-- Logo (Optional) -->
      <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="mx-auto mb-6 h-20 sm:h-24 md:h-32" />

      <!-- Main Heading -->
      <h1 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
        Your Headline Here
      </h1>

      <!-- Subheading -->
      <p class="text-white text-base sm:text-lg md:text-xl mb-8">
        A short catchy message or value proposition.
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <a href="#book" class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow transition">
          Book Now
        </a>
        <a href="#learn-more" class="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg shadow transition">
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const logoUrl = '/assets/images/logo/logo-white.png'
</script>
