<template>
  <section
    class="min-h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-center px-4 sm:px-8 pt-[10vh] pb-20 overflow-auto"
    style="background-image: url('/assets/images/your-bg.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20 z-0"></div>

    <!-- Content -->
    <div class="relative z-10 text-center text-white w-full max-w-4xl">
      <!-- Logo -->
      <img
        v-if="logoUrl"
        :src="logoUrl"
        alt="Logo"
        class="mx-auto mb-10 max-h-[55vh] object-contain"
      />



      <!-- Slogan -->
      <p
        class="text-[35px]  text-white text-center tracking-wide drop-shadow-md"
        style="font-family: 'Cormorant Garamond', serif; text-transform: none;"
      >
        
        Helping you find the right fit, every time
      </p>

    </div>
  </section>
</template>

<script setup>
import logoUrl from '../../assets/images/logo/Blouberg-Coastal-Escapes-Hero-Logo.png'
</script>

<style scoped>
@keyframes fade-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out 0.5s forwards;
}
</style>
