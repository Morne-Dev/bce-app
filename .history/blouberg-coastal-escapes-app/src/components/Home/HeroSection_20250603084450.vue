<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center overflow-hidden"
    style="background-image: url('/assets/images/your-bg.jpg');"
  >
    <!-- Top dark overlay -->
    <div class="absolute inset-0 bg-black/40 z-0"></div>

    <!-- Bottom fade overlay -->
    <div
      class="absolute left-0 right-0 bottom-0 h-1/4 bg-gradient-to-b from-black/30 to-transparent z-10"
    ></div>

    <!-- Content (on top) -->
    <div class="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8">
      <img
        v-if="logoUrl"
        :src="logoUrl"
        alt="Logo"
        class="mb-10 max-h-[60vh] object-contain"
      />
      <p
        class="text-[35px] text-white tracking-wide drop-shadow-md text-center"
        style="font-family: 'Cormorant Garamond', serif;"
      >
        Helping you find the right fit, every time
      </p>
    </div>
  </section>
</template>

<script setup>
import logoUrl from '@/assets/images/logo/Blouberg-Coastal-Escapes-Hero-Logo.png'
</script>

<style scoped>
/* no additional CSS needed */
</style>



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
