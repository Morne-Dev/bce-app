<template>
  <section class="relative py-24 px-6 overflow-hidden">
    <!-- Background video + overlay with wave effect -->
    <div class="absolute inset-0 z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full h-full object-cover"
      >
        <source
          src="@/assets/videos/blouberg-airbnb-holiday-property-management-ripples-background-video.mp4"
          type="video/mp4"
        />
      </video>

      <!-- Overlay with transparent-to-white wave fade -->
      <div class="absolute inset-0 wave-overlay pointer-events-none"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div class="mb-16">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Seamless management for your holiday property — from check-in to cleanliness to repairs.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <ServiceCard
          :image="holidayImg"
          title="Holiday Property Management"
          description="We handle everything: guests, bookings, check-ins, cleaning, and care—so you don’t have to."
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
import ServiceCard from './ServiceCard.vue'

import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png'
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png'
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png'
</script>

<style scoped>
.wave-overlay {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 30%);
  clip-path: path('M0,30 C150,60 350,0 500,30 L500,100 L0,100 Z');
}

/* Fallback if `path()` is not supported */
@supports not (clip-path: path('')) {
  .wave-overlay {
    clip-path: polygon(
      0% 10%,
      10% 13%,
      20% 10%,
      30% 13%,
      40% 10%,
      50% 13%,
      60% 10%,
      70% 13%,
      80% 10%,
      90% 13%,
      100% 10%,
      100% 100%,
      0% 100%
    );
  }
}
</style>
