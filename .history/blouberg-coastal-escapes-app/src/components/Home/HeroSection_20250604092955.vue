<template>
  <section
    class="min-h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-center px-4 sm:px-8 pt-[10vh] pb-20 overflow-auto"
    style="background-image: url('/assets/images/your-bg.jpg');"
    ref="heroSection"
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
        class="mx-auto mb-10 max-h-[45vh] object-contain animate-item"
      />

      <!-- Slogan -->
      <p
        class="text-[35px] text-white text-center tracking-wide drop-shadow-md animate-item"
        style="font-family: 'Cormorant Garamond', serif; text-transform: none;"
      >
        Helping you find the right fit, every time
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logoUrl from '../../assets/images/logo/Blouberg-Coastal-Escapes-Hero-Logo.png'

const heroSection = ref(null)
let observer

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
      observer.unobserve(entry.target)
    }
  })
}

onMounted(() => {
  const options = { threshold: 0.2 }
  observer = new IntersectionObserver(handleIntersect, options)
  heroSection.value
    .querySelectorAll('.animate-item')
    .forEach(el => {
      observer.observe(el)
    })
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
