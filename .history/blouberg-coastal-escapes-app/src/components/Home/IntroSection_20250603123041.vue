<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
    ref="introSection"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 z-0 fade-only"></div>

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
    <div
      class="relative z-10 mt-16 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-center"
    >
      <div class="flex-1 animate-item">
        <div class="text-4xl text-gray-700 mb-2">✔️</div>
        <h3 class="font-semibold italic text-gray-800">Established</h3>
        <p class="text-sm text-gray-600 mt-2">
          In-depth local knowledge ensures your investment is optimized for success.
        </p>
      </div>
      <div class="flex-1 animate-item">
        <div class="text-4xl text-purple-800 mb-2">👍</div>
        <h3 class="font-semibold italic text-gray-800">Reviews</h3>
        <p class="text-sm text-gray-600 mt-2">
          High scores show our commitment to guest satisfaction and repeat bookings.
        </p>
      </div>
      <div class="flex-1 animate-item">
        <div class="text-4xl text-purple-800 mb-2">📍</div>
        <h3 class="font-semibold italic text-gray-800">Local</h3>
        <p class="text-sm text-gray-600 mt-2">
          Proud Blouberg locals delivering personalized, expert service.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'

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

.fade-only {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 40%);
  
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  
  -webkit-mask-position: top left;
  mask-position: top left;

  background-color: white; /* Optional: fallback for non-mask-supporting browsers */
}

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
