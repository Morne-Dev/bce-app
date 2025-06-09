<template>
  <section class="relative py-24 px-6 overflow-hidden">
    <!-- Wave at top -->
    <div class="absolute top-0 left-0 w-full h-24 wave-top z-20"></div>

    <!-- Background video + white overlay at 80% -->
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
      <div class="absolute inset-0 bg-white/80"></div>
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
import ServiceCard from './ServiceCard.vue';

import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png';
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png';
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png';
</script>

<style scoped>
.wave-top {
  background: url("data:image/svg+xml,%3Csvg width='1440' height='80' viewBox='0 0 1440 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 80L1440 0V80H0Z' fill='white'/%3E%3C/svg%3E") no-repeat bottom center;
  background-size: cover;
  pointer-events: none;
}

/* Optional: if your background and overlay are whiteish, set wave color accordingly */
</style>
