<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
    ref="introSection"
  >
    <!-- Top Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-0"></div>

    <!-- Top Content -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Left image -->
      <div class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 animate-item">
        <img
          :src="interiorImage"
          alt="Interior"
          class="max-w-full h-auto rounded-lg shadow-2xl"
        />
      </div>

      <!-- Right content -->
      <div class="w-full md:w-1/2 text-white max-w-2xl mx-auto text-left space-y-5 animate-item">
        <h1 class="text-4xl sm:text-5xl font-serif font-bold text-black leading-snug">
          Luxury Holiday Property Management<br />
          in Cape Town’s Coastal Gem — Bloubergstrand
        </h1>
        <p class="text-xl text-gray-700 font-medium">
          Premium Maintenance · Pristine Cleaning · 5-Star Guest Experience
        </p>
        <p class="text-md text-gray-600">
          Owning property is valuable — managing it flawlessly requires true expertise.
        </p>
        <p class="text-md text-gray-600">
          With 20+ years of high-end hospitality, Blouberg Coastal Escapes is your trusted partner.
        </p>
        <p class="text-md text-gray-600">
          We optimize your rental income, handle guests with white-glove care, and maintain every detail.
        </p>
      </div>
    </div>

    <!-- Features Section -->
    <div class="relative z-10 mt-24 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center md:text-left">
      <div class="animate-item flex flex-col items-center sm:items-start">
        <div class="bg-white shadow-md p-4 rounded-full">
          <BuildingOfficeIcon class="h-10 w-10 text-yellow-400" />
        </div>
        <h3 class="font-serif font-semibold text-gray-800 mt-4">Established</h3>
        <p class="text-sm text-gray-600 mt-2">
          Decades of local insight maximize your property’s potential.
        </p>
      </div>
      <div class="animate-item flex flex-col items-center sm:items-start">
        <div class="bg-white shadow-md p-4 rounded-full">
          <StarIcon class="h-10 w-10 text-yellow-400" />
        </div>
        <h3 class="font-serif font-semibold text-gray-800 mt-4">Reputation</h3>
        <p class="text-sm text-gray-600 mt-2">
          Glowing guest reviews reflect our dedication to excellence.
        </p>
      </div>
      <div class="animate-item flex flex-col items-center sm:items-start">
        <div class="bg-white shadow-md p-4 rounded-full">
          <MapPinIcon class="h-10 w-10 text-yellow-400" />
        </div>
        <h3 class="font-serif font-semibold text-gray-800 mt-4">Local Experts</h3>
        <p class="text-sm text-gray-600 mt-2">
          Cape Town natives providing hands-on, personalized service.
        </p>
      </div>
    </div>

    <!-- Bottom Fade to White -->
    <div class="absolute inset-x-0 bottom-0 h-[70vh] bg-gradient-to-t from-white via-white/60 to-transparent z-0"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
import { BuildingOfficeIcon, StarIcon, MapPinIcon } from '@heroicons/vue/24/solid'

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
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
