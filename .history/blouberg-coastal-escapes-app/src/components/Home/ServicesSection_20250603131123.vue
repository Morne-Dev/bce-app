<template>
  <section class="relative py-24 px-6 overflow-hidden fade-only bg-white">
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
    <div class="relative z-10 max-w-6xl mx-auto text-center pt-50">
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

    <!-- Bottom white fade -->
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-0"></div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue';

import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png';
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png';
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png';
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
}
</style>
