<template>
  <section
    class="relative w-full min-h-screen bg-cover bg-center pt-40 sm:pt-32 pb-12"
    style="background-image: url('/assets/images/beach-bg.jpg');"
    ref="introSection"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/80 z-0"></div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Left: Image -->
      <div class="flex justify-center animate-item" style="transition-delay: 0.1s;">
        <img
          :src="interiorImage"
          alt="Interior View"
          class="w-full max-w-md rounded-xl shadow-2xl rotate-[-1deg]"
        />
      </div>

      <!-- Right: Text -->
      <div class="space-y-6 text-center md:text-left text-neutral-800 animate-item" style="transition-delay: 0.2s;">
        <h1 class="text-4xl sm:text-5xl font-serif font-bold leading-tight">
          Professional Holiday Property Management <br />
          in Bloubergstrand, Cape Town
        </h1>
        <p class="text-lg font-medium text-neutral-700">
          Expert Maintenance, Cleaning & Guest Coordination
        </p>
        <ul class="space-y-2 text-base text-neutral-700">
          <li>✔️ 20+ years of experience managing coastal holiday properties</li>
          <li>✔️ Maximize rental income with tailored strategies</li>
          <li>✔️ We handle everything: from bookings to cleaning & repairs</li>
        </ul>
        <div class="pt-4">
          <a
            href="#contact"
            class="inline-block bg-[#2C6E6F] hover:bg-[#245C5D] text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div class="relative z-10 mt-24 max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-12 text-center">
      <FeatureCard
        iconPath="mdiDomain"
        title="Established"
        desc="Local knowledge of Blouberg’s holiday market gives us an edge in managing and optimizing your property."
        delay="0.1s"
      />
      <FeatureCard
        iconPath="mdiStarCircle"
        title="Highly Rated"
        desc="Our above-industry guest review scores help build trust, repeat bookings, and more income for you."
        delay="0.2s"
      />
      <FeatureCard
        iconPath="mdiMapMarkerRadius"
        title="Local Experts"
        desc="We’re based in Blouberg with deep roots and a strong network to offer personalized, reliable service."
        delay="0.3s"
      />
    </div>

    <!-- Bottom Fade -->
    <div class="absolute inset-x-0 bottom-0 h-[80vh] bg-gradient-to-t from-white via-[#ffffffdd] to-transparent z-0"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { mdiDomain, mdiStarCircle, mdiMapMarkerRadius } from '@mdi/js'
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
  introSection.value?.querySelectorAll('.animate-item').forEach(el => observer.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<!-- Reusable Feature Card Component -->
<script>
export default {
  name: 'FeatureCard',
  props: ['iconPath', 'title', 'desc', 'delay'],
  components: {},
  template: `
    <div class="animate-item flex flex-col items-center px-4" :style="{ transitionDelay: delay }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-[#4E9B9B] hover:text-[#2C6E6F] transition-transform duration-300 hover:scale-110"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path :d="$props.iconPath" />
      </svg>
      <h3 class="mt-4 text-lg font-semibold text-neutral-800">{{ title }}</h3>
      <p class="mt-2 text-sm text-neutral-600">{{ desc }}</p>
    </div>
  `
}
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
