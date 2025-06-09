<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center pt-60 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
    ref="introSection"
  >
    <!-- Top Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-0"></div>

    <!-- Top Content -->
    <div
      class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Left image -->
      <div
        class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 animate-item"
      >
        <img
          :src="interiorImage"
          alt="Interior"
          class="max-w-full h-auto rounded-md shadow-lg"
        />
      </div>

      <!-- Right content -->
      <div
        class="w-full md:w-1/2 text-white max-w-2xl mx-auto text-center md:text-left space-y-4"
      >
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-black leading-tight animate-item">
          Professional Holiday Property Management in<br />
          Cape Town’s Coastal Hub Bloubergstrand,
        </h1>
        <p class="text-lg text-gray-800 font-medium animate-item">
          Expert Maintenance, Cleaning and Guest Coordination
        </p>
        <p class="text-md text-gray-700 animate-item">
          Owning a property is a valuable investment, but managing it can be challenging without the right support.
        </p>
        <p class="text-md text-gray-700 animate-item">
          At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
        </p>
        <p class="text-md text-gray-700 animate-item">
          From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it all.
        </p>
      </div>
    </div>

    <!-- Features Section -->
    <!-- Updated Features Section -->
<div class="relative z-10 mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
  <div class="animate-item flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
      <path :d="mdiDomain" />
    </svg>
    <h3 class="mt-4 text-lg font-semibold text-gray-800">Established</h3>
    <p class="mt-2 text-sm text-gray-600">
      In-depth local knowledge ensures your investment is optimized for success.
    </p>
  </div>

  <div class="animate-item flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
      <path :d="mdiStarCircle" />
    </svg>
    <h3 class="mt-4 text-lg font-semibold text-gray-800">Reviews</h3>
    <p class="mt-2 text-sm text-gray-600">
      High scores show our commitment to guest satisfaction and repeat bookings.
    </p>
  </div>

  <div class="animate-item flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
      <path :d="mdiMapMarkerRadius" />
    </svg>
    <h3 class="mt-4 text-lg font-semibold text-gray-800">Local</h3>
    <p class="mt-2 text-sm text-gray-600">
      Proud Blouberg locals delivering personalized, expert service.
    </p>
  </div>
</div>


    <!-- Bottom Fade to White -->
    <div class="absolute inset-x-0 bottom-0 h-[90vh] bg-gradient-to-t from-white via-white/70 to-transparent z-0"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
import { BuildingOfficeIcon, StarIcon, MapPinIcon } from '@heroicons/vue/24/solid'
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
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
