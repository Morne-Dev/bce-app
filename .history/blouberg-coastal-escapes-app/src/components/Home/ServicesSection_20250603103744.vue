<template>
  <section class="relative py-24 px-6 overflow-hidden wave-transition">
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
.wave-transition {
  position: relative;
  overflow: visible; /* allow wave overflow */
}

/* Wave mask overlay using a radial-gradient fade at top */
.wave-transition::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  pointer-events: none;
  z-index: 20;

  /* Create a smooth wave fade with a repeating linear gradient */
  background:
    radial-gradient(
      ellipse 140% 120% at 50% 0%,
      rgba(255 255 255 / 1) 60%,
      rgba(255 255 255 / 0) 100%
    );
}

/* To soften the wave shape further, add clip-path */
.wave-transition::before {
  clip-path: polygon(
    0% 100%, 10% 80%, 20% 100%, 30% 80%, 40% 100%, 50% 80%, 60% 100%, 70% 80%, 80% 100%, 90% 80%, 100% 100%, 100% 0, 0 0
  );
}

/* Optional: ensure video + overlay stay behind */
.wave-transition > div:first-child {
  position: absolute;
  inset: 0;
  z-index: 0;
}
</style>
