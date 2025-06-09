<template>
  <section
    ref="introSection"
    class="intro-section relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-0"></div>

    <!-- Top Content (Image + Text Columns) -->
    <div class="relative z-10 w-full flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto">
      <!-- Left image -->
      <div class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img :src="interiorImage" alt="Interior" class="max-w-full h-auto rounded-md shadow-lg" />
      </div>

      <!-- Right content -->
      <div class="w-full md:w-1/2 text-white max-w-2xl mx-auto text-center md:text-left">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-black leading-tight">
          Professional Holiday Property Management in<br />
          Cape Town’s Coastal Hub Bloubergstrand,
        </h1>
        <p class="mt-4 text-lg text-gray-800 font-medium">
          Expert Maintenance, Cleaning and Guest Coordination
        </p>
        <p class="mt-6 text-md text-gray-700">
          Owning a property is a valuable investment, but managing it can be challenging without the right support.
        </p>
        <p class="mt-4 text-md text-gray-700">
          At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
        </p>
        <p class="mt-4 text-md text-gray-700">
          From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it
          all, so your property stays in top condition year-round.
        </p>
      </div>
    </div>

    <!-- Features Section -->
    <div
      class="relative z-10 mt-16 w-full px-4 md:px-0 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-center"
    >
      <div class="flex-1">
        <div class="text-4xl text-gray-700 mb-2">✔️</div>
        <h3 class="font-semibold italic text-gray-800">Established</h3>
        <p class="text-sm text-gray-600 mt-2">
          As Blouberg locals, we have an in-depth understanding of the holiday market in the area. Our firsthand
          knowledge allows us to provide tailored holiday property management solutions, ensuring your investment is
          well-maintained and optimized for success.
        </p>
      </div>

      <div class="flex-1">
        <div class="text-4xl text-purple-800 mb-2">👍</div>
        <h3 class="font-semibold italic text-gray-800">Reviews</h3>
        <p class="text-sm text-gray-600 mt-2">
          Consistently rated above industry standard, our high review score shows our commitment to guest experience.
          This dedication ensures exceptional satisfaction, fostering repeat visits and positive referrals.
        </p>
      </div>

      <div class="flex-1">
        <div class="text-4xl text-purple-800 mb-2">📍</div>
        <h3 class="font-semibold italic text-gray-800">Local</h3>
        <p class="text-sm text-gray-600 mt-2">
          Based in Blouberg, we’re proud locals with unmatched expertise in property management services. We blend
          community insights with personalized service.
        </p>
      </div>
    </div>
  </section>
</template>



<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'

const introSection = ref(null)

function onIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-show')
    } else {
      entry.target.classList.remove('animate-show')
    }
  })
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(onIntersection, { threshold: 0.3 })
  if (introSection.value) {
    observer.observe(introSection.value)
  }
})

onBeforeUnmount(() => {
  if (observer && introSection.value) {
    observer.unobserve(introSection.value)
  }
})
</script>


<style scoped>

.intro-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: opacity, transform;
}

.intro-section.animate-show {
  opacity: 1;
  transform: translateY(0);
}



/* Gradient overlay already in template */
</style>
