<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center pt-60 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg'); background-attachment: fixed;"
    ref="introSection"
  >
    <!-- Top Gradient Overlay with animation -->
    <div class="absolute inset-0 z-0 hero-overlay"></div>

    <!-- Top Content -->
    <div
      class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-12 px-4 sm:px-6"
    >
      <!-- Left image -->
      <div
        class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 animate-item"
      >
        <img
          :src="interiorImage"
          alt="Interior"
          class="max-w-full h-auto rounded-md shadow-lg transition transform hover:scale-105"
        />
      </div>

      <!-- Right content -->
      <div
        class="w-full md:w-1/2 text-white max-w-2xl mx-auto text-center md:text-left space-y-6 backdrop-glass animate-item"
      >
        <h1 class="text-4xl sm:text-5xl font-serif font-bold leading-tight bg-gradient-to-r from-blue-800 via-sky-600 to-cyan-400 bg-clip-text text-transparent">
          Professional Holiday Property Management in<br />
          Cape Town’s Coastal Hub Bloubergstrand
        </h1>
        <p class="text-lg text-gray-800 font-medium">
          Expert Maintenance, Cleaning and Guest Coordination
        </p>
        <div class="space-y-4">
          <p class="text-md text-gray-700 leading-relaxed max-w-lg">
            Owning a property is a valuable investment, but managing it can be challenging without the right support.
          </p>
          <p class="text-md text-gray-700 leading-relaxed max-w-lg">
            At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
          </p>
          <p class="text-md text-gray-700 leading-relaxed max-w-lg">
            From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it all.
          </p>
        </div>
        <button class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Book Free Consultation
        </button>
      </div>
    </div>

    <!-- Features Section -->
    <div class="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
      <div class="animate-item flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-500 transition-transform hover:scale-110 hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path :d="mdiDomain" />
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">Established</h3>
        <p class="mt-2 text-sm text-gray-600">
          In-depth local knowledge ensures your investment is optimized for success.
        </p>
      </div>

      <div class="animate-item flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-500 transition-transform hover:scale-110 hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path :d="mdiStarCircle" />
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">Reviews</h3>
        <p class="mt-2 text-sm text-gray-600">
          High scores show our commitment to guest satisfaction and repeat bookings.
        </p>
      </div>

      <div class="animate-item flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-500 transition-transform hover:scale-110 hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
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
/* Animate in on scroll */
.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}

/* Subtle animated gradient overlay */
.hero-overlay {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  background-size: 200% 100%;
  animation: gradientMove 15s ease-in-out infinite;
}

/* Frosted glass background option for text section */
.backdrop-glass {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
}

/* Gradient motion animation */
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
