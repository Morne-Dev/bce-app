<template>
  <section class="relative py-24 px-6 overflow-hidden">
    <!-- Background video + white overlay -->
    <div ref="videoContainer" class="absolute inset-0 z-0 will-change-transform">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster=""
        class="w-full h-full object-cover"
      >
        <source
          src="@/assets/videos/blouberg-airbnb-holiday-property-management-ripples-background-video.mp4"
          type="video/mp4"
        />
      </video>
      <div class="absolute inset-0 bg-white/80 dark:bg-black/70"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div class="mb-16">
        <h2 class="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          Our Services
        </h2>
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Seamless management for your holiday property — from check-in to cleanliness to repairs.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <ServiceCard
          :image="holidayImg"
          title="Holiday Property Management"
          description="We handle everything: guests, bookings, check-ins, cleaning, and care — so you don’t have to."
        />
        <ServiceCard
          :image="cleaningImg"
          title="Cleaning Services"
          description="Professional teams follow a detailed checklist to leave every corner spotless."
        />
        <ServiceCard
          :image="maintenanceImg"
          title="Maintenance Services"
          description="Fast repairs and preventive checks to keep your property safe and guest-ready."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ServiceCard from './ServiceCard.vue';

import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png';
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png';
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png';

const videoContainer = ref(null);
function handleScroll() {
  if (videoContainer.value) {
    const y = window.scrollY * 0.5;
    videoContainer.value.style.transform = `translateY(${y}px)`;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
:root {
  --brand-blue: #3b82f6;
  --card-radius: 1.5rem;
}
</style>
