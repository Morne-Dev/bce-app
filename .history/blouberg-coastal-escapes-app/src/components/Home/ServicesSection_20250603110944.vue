<template>
  <section class="relative py-24 px-6 overflow-hidden transition-section">
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
        <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
        <p class="text-gray-700 text-lg max-w-2xl mx-auto">
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
.transition-section {
  /* Make sure the section covers full width */
  position: relative;
  overflow: hidden;
}

/* Modern smooth wave-shaped top transition using clip-path and a soft fade */
.transition-section::before {
  content: "";
  position: absolute;
  top: -80px; /* raise it above the section */
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, transparent 40%, rgba(255 255 255 / 0.9) 90%);
  /* Soft wave shape with clip-path polygon */
  clip-path: polygon(
    0% 100%, 10% 85%, 20% 95%, 30% 80%, 40% 90%, 50% 75%, 
    60% 90%, 70% 80%, 80% 95%, 90% 85%, 100% 100%, 100% 0, 0 0
  );
  pointer-events: none;
  z-index: 10;
  filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.12));
  /* subtle shadow for depth */
  transition: opacity 0.5s ease;
}

/* Optional: subtle fade-in on scroll (requires JS to add a class) */
/* .transition-section.visible::before {
  opacity: 1;
}
.transition-section::before {
  opacity: 0;
} */
</style>
