<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
    ref="introSection"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/70 z-0"></div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 animate-item">
      <!-- Left image -->
      <div class="flex justify-center">
        <img
          :src="interiorImage"
          alt="Interior"
          class="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white"
        />
      </div>

      <!-- Right Content -->
      <div class="text-white md:text-left text-center space-y-6">
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight text-black">
          Expert Holiday Property Management in<br />
          <span class="text-blue-700">Bloubergstrand, Cape Town</span>
        </h1>
        <p class="text-lg text-gray-800 font-medium">
          Complete care: Maintenance, Cleaning & Guest Coordination.
        </p>
        <ul class="text-gray-700 space-y-2 list-disc list-inside">
          <li>Over 20 years of proven experience</li>
          <li>Maximize rental income and guest satisfaction</li>
          <li>Local expertise with premium service</li>
        </ul>
      </div>
    </div>

    <!-- Features Section -->
    <div class="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="animate-item text-center bg-white/80 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
        <svg class="mx-auto h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path :d="mdiDomain" />
        </svg>
        <h3 class="mt-4 text-xl font-semibold text-gray-900">Established</h3>
        <p class="mt-2 text-sm text-gray-700">
          Deep knowledge of the local market for smarter investments.
        </p>
      </div>

      <div class="animate-item text-center bg-white/80 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
        <svg class="mx-auto h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path :d="mdiStarCircle" />
        </svg>
        <h3 class="mt-4 text-xl font-semibold text-gray-900">Highly Rated</h3>
        <p class="mt-2 text-sm text-gray-700">
          Stellar reviews and repeat bookings from happy guests.
        </p>
      </div>

      <div class="animate-item text-center bg-white/80 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
        <svg class="mx-auto h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path :d="mdiMapMarkerRadius" />
        </svg>
        <h3 class="mt-4 text-xl font-semibold text-gray-900">Local Experts</h3>
        <p class="mt-2 text-sm text-gray-700">
          Trusted Blouberg locals with personal service.
        </p>
      </div>
    </div>

    <!-- Bottom Fade -->
    <div class="absolute inset-x-0 bottom-0 h-[90vh] bg-gradient-to-t from-white via-white/70 to-transparent z-0"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
import { mdiDomain, mdiStarCircle, mdiMapMarkerRadius } from '@mdi/js'

const introSection = ref(null)
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
  introSection.value
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
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
</style>