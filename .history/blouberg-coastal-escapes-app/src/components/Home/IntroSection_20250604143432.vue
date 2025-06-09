<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center pt-60 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
    ref="introSection"
  >
    <!-- Stronger Top Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-white/5 to-transparent z-0"></div>

    <!-- Main Content Layout -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-12 px-6 sm:px-8">
      <!-- Left image -->
      <div class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 pt-6 animate-item" style="transition-delay: 0.1s;">
        <img
          :src="interiorImage"
          alt="Interior"
          class="max-w-full h-auto rounded-md drop-shadow-2xl rotate-[-1deg]"
        />
      </div>

      <!-- Right text content with white backdrop for contrast -->
      <div class="w-full md:w-1/2 max-w-2xl mx-auto text-center md:text-left space-y-6 bg-white/90 p-6 rounded-xl shadow-lg animate-item" style="transition-delay: 0.2s;">
        <h1 class="text-5xl lg:text-6xl font-serif font-semibold leading-tight text-neutral-900">
          Professional Holiday Property Management in<br />
          Cape Town’s Coastal Hub Bloubergstrand
        </h1>
        <p class="text-lg text-neutral-800 font-medium">
          Expert Maintenance, Cleaning and Guest Coordination
        </p>
        <div class="space-y-4 text-neutral-700">
          <p>
            Owning a property is a valuable investment. Managing it well is what we do best.
          </p>
          <p>
            With 20+ years of experience, we handle your holiday rental with local knowledge and expert care.
          </p>
          <p>
            From maximizing income to seamless cleaning and guest services — we’ve got it covered.
          </p>
        </div>

        <!-- CTA Button with Arrow Icon -->
        <div class="pt-4">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-[#2C6E6F] hover:bg-[#245C5D] text-white px-7 py-4 rounded-full shadow-lg transition-all"
          >
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center px-4">
      <div class="animate-item flex flex-col items-center" style="transition-delay: 0.1s;">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-10 w-10 text-[#4E9B9B] hover:text-[#2C6E6F] transition-transform duration-300 hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
          <path :d="mdiDomain" />
        </svg>
        <h3 class="mt-6 text-xl font-bold text-neutral-800">Established</h3>
        <p class="mt-2 text-sm text-neutral-600">
          We’re locals with deep market knowledge. We help you maintain and grow your investment confidently.
        </p>
      </div>

      <div class="animate-item flex flex-col items-center" style="transition-delay: 0.2s;">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-10 w-10 text-[#4E9B9B] hover:text-[#2C6E6F] transition-transform duration-300 hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
          <path :d="mdiStarCircle" />
        </svg>
        <h3 class="mt-6 text-xl font-bold text-neutral-800">Reviews</h3>
        <p class="mt-2 text-sm text-neutral-600">
          Our high ratings reflect top-tier service and guest satisfaction — key to repeat bookings and growth.
        </p>
      </div>

      <div class="animate-item flex flex-col items-center" style="transition-delay: 0.3s;">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-10 w-10 text-[#4E9B9B] hover:text-[#2C6E6F] transition-transform duration-300 hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
          <path :d="mdiMapMarkerRadius" />
        </svg>
        <h3 class="mt-6 text-xl font-bold text-neutral-800">Local</h3>
        <p class="mt-2 text-sm text-neutral-600">
          Based in Blouberg, we know the short-term rental market inside-out and offer hands-on management.
        </p>
      </div>
    </div>

    <!-- Bottom Fade to White -->
    <div class="absolute inset-x-0 bottom-0 h-[90vh] bg-gradient-to-t from-[#fefefe] via-[#ffffffcc] to-transparent z-0"></div>
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
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
